export class ToDoRefData {

  private _toDoId: number;
  private _refId: number;
  private _toDoYn: string;


    get toDoId(): number {
        return this._toDoId;
    }

    set toDoId(value: number) {
        this._toDoId = value;
    }

    get refId(): number {
        return this._refId;
    }

    set refId(value: number) {
        this._refId = value;
    }

    get toDoYn(): string {
        return this._toDoYn;
    }

    set toDoYn(value: string) {
        this._toDoYn = value;
    }
}
