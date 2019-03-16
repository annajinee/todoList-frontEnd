
export class Pageinfo {
    private _totalCount: number;
    private _totalPage: number;
    private _pageNumber: number;

    get totalCount(): number {
        return this._totalCount;
    }

    set totalCount(value: number) {
        this._totalCount = value;
    }

    get totalPage(): number {
        return this._totalPage;
    }

    set totalPage(value: number) {
        this._totalPage = value;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    set pageNumber(value: number) {
        this._pageNumber = value;
    }
}
