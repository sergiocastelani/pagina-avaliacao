import { Person } from '../Model/Person';

export class PersonDb 
{

  static insert (person: Person)
  {
    PersonDb._transaction(() => {
      let exists = PersonDb._persons.some(p => p.id === person.id);
      if (exists)
        throw new Error('A Person with this ID already exists');

      PersonDb._persons.push(person);
    });
  }

  static insertAll (persons: Person[])
  {
    PersonDb._transaction(() => {
      for (let person of persons) 
      {
        let exists = PersonDb._persons.some(p => p.id === person.id);
        if (exists)
          throw new Error('A Person with this ID already exists');
      }

      PersonDb._persons.push(...persons);
    });
  }

  static getAll() {
    return structuredClone(PersonDb._persons);
  }

  static findById (id: string)
  {
    let result : Person | undefined;

    PersonDb._transaction(() => {
      result = PersonDb._persons.find(p => p.id === id);
      if (result)
        result = structuredClone(result);
    });

    return result;
  }

  //----------------
  //private section
  //----------------

  private static _persons: Person[] = [];

  private static _load()
  {
    if (this._persons.length === 0) 
    {
      let personsJson = localStorage.getItem('persons');
      if (personsJson) 
      {
        this._persons = JSON.parse(personsJson);      
      }
    }
  }

  private static _store() 
  {
    localStorage.setItem('persons', JSON.stringify(this._persons));
  }

  private static _transaction(operation: () => void)
  {
    PersonDb._load();
    operation();
    PersonDb._store();
  }

}