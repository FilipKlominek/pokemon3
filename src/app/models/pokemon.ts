import {Name} from "./name";
import {Base} from "./base";

export class Pokemon {
  public readonly id: number = 0;
  public readonly name: Name = new Name;
  public readonly type: string[] = [];
  public readonly base: Base = new Base;
}
