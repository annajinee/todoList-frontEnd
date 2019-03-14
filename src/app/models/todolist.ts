import {ToDoRefData} from './todoref';

export class ToDoListData {
    private _rowId: number;
    private _toDo: string;
    private _regDate: string;
    private _modDate: string;
    private _endYn: string;
    private _refData: Array<ToDoRefData>;

    get rowId(): number {
        return this._rowId;
    }

    set rowId(value: number) {
        this._rowId = value;
    }

    get toDo(): string {
        return this._toDo;
    }

    set toDo(value: string) {
        this._toDo = value;
    }

    get regDate(): string {
        return this._regDate;
    }

    set regDate(value: string) {
        this._regDate = value;
    }

    get modDate(): string {
        return this._modDate;
    }

    set modDate(value: string) {
        this._modDate = value;
    }

    get endYn(): string {
        return this._endYn;
    }

    set endYn(value: string) {
        this._endYn = value;
    }

    get refData(): Array<ToDoRefData> {
        return this._refData;
    }

    set refData(value: Array<ToDoRefData>) {
        this._refData = value;
    }
}
