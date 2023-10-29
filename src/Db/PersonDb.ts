import { Person } from '../Model/Person';

export class PersonDb 
{

  static add (person: Person)
  {
    PersonDb._transaction(() => {
      let exists = PersonDb._persons.some(p => p._id === person._id);
      if (exists)
        throw new Error('A Person with this ID already exists');

      PersonDb._persons.push(person);
    });
  }

  static addAll (persons: Person[])
  {
    PersonDb._transaction(() => {
      for (let person of persons) 
      {
        let exists = PersonDb._persons.some(p => p._id === person._id);
        if (exists)
          throw new Error('A Person with this ID already exists');
      }

      PersonDb._persons.push(...persons);
    });
  }

  static getAll() {
    PersonDb._load();
    return structuredClone(PersonDb._persons);
  }

  static findById (id: string)
  {
    let result : Person | undefined;

    PersonDb._transaction(() => {
      result = PersonDb._persons.find(p => p._id === id);
      if (result)
        result = structuredClone(result);
    });

    return result;
  }

  static update (person: Person)
  {
    PersonDb._transaction(() => {
      let existingPersonIndex = PersonDb._persons.findIndex(p => p._id === person._id);
      if (existingPersonIndex < 0)
        throw new Error('There is no Person with this ID');

      PersonDb._persons.splice(existingPersonIndex, 1);
      PersonDb._persons.push(person);
    });
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