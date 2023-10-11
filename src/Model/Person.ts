import { Ability } from "./Ability";
import { v4 as uuidv4 } from 'uuid';

export class Person 
{
  private _id : string;
  public abilities : Ability[] = [];

  constructor(
    public name : string, 
    public photo : string
  ){
    this._id = uuidv4();
  }

  get id() : string { return this._id; }
}