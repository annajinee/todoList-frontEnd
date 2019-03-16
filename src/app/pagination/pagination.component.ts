import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagination',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent {

    @Input()
    totalPage: number = 0;
    @Input()
    page: number = 0;
    @Output()
    goTo: EventEmitter<number> = new EventEmitter<number>();
    from: number = 1;
    to: number;

    constructor() {
    }

    totalPages() {
        return this.totalPage;
    }

    prevPage() {
        return Math.max(1, this.page - 4);
    }

    pageFirst() {
        return Math.max(1, -1);
    }

    pageLast() {
        return Math.min(this.totalPages(), this.totalPages());
    }

    nextPage() {
        return Math.min(this.totalPages(), this.page + 5);
    }

    pageClicked(page: number) {
        this.goTo.next(page);
    }

    pagesRange() {
        if (this.totalPages() <= 10) {
            return this.range(this.from, this.totalPages() + 1);
        } else {
            if (this.page <= 6) {
                this.from = 1;
                this.to = 10;
                return this.range(this.from, this.to);
            } else if (this.page + 4 >= this.totalPages() + 1) {
                this.from = this.totalPages() - 9;
                this.to = this.totalPages() + 1;
                return this.range(this.from, this.to);
            } else {
                this.from = this.page - 5;
                this.to = this.page + 4;
                return this.range(this.from, this.to);
            }
        }
    }

    range(start, stop, step = 1) {
        if (!stop) {
            start = 0;
            stop = start;
        }
        return Array.from(new Array(Number((stop - start) / step)), (x, i) => start + i * step);
    }
}
