import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ToDoListService} from '../services/todolist.service';
import {ToDoListData} from '../models/todolist';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import 'rxjs/add/observable/of';
import {Pageinfo} from '../models/pageinfo';


@Component({
    selector: 'app-postuserinfo',
    templateUrl: 'todolist.component.html'
})
export class ToDoListComponent implements OnInit {

    tasks: ToDoListData[];
    rowId: number;
    endYn: string;
    refTasks: Array<number>;
    model: any = {};
    totalPages: number;
    totalElements: number;
    last: number;
    size: number;
    number: number;
    numberOfElements: number;
    total$: Observable<number>;
    private searchTermStream = new Subject<string>();
    page: number = 1;
    selected: string;
    output: string;
    cssClass: string = '';
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    toDoDetailData: ToDoListData;

    @ViewChild('modal')
    modal: ModalComponent;

    @ViewChild('modalDetail')
    modalDetail: ModalComponent;


    constructor(private todoListService: ToDoListService) {
    }


    ngOnInit() {
        this.getToDoList(this.page);
    }

    openTaskModal() {
        this.modal.open();
    }

    openTodoDetailModal(toDoData: ToDoListData) {
        this.toDoDetailData = toDoData;
        this.modalDetail.open();
    }
    getToDoList(page) {
        this.todoListService.getToDoList(0, 10)
            .subscribe(
                result => {
                    this.tasks = result['dataList'];
                    this.totalPages = result['totalPages'];
                    this.totalElements = result['totalElements'];
                    // this.last = result['last'];
                    const Pageinfo = result['pageInfo'];
                    this.number = result['number'];
                    this.numberOfElements = result['numberOfElements'];
                    this.page = result['number'];
                    this.total$ = Observable.of(this.totalElements);
                },
                error => {
                    alert(error);
                });
    }


    setEndYn(task: ToDoListData, endYn) {

        const rowId = task.rowId;
        this.todoListService.setEndYn(this.rowId, this.endYn)
            .subscribe(
                data => {
                    this.ngOnInit();
                },
                error => {
                    alert('상태 변경을 실패 하였습니다' + error);
                    this.ngOnInit();
                });

    }

    editTask(task: ToDoListData) {

        this.todoListService.editTask(task)
            .subscribe(
                data => {
                    this.ngOnInit();
                    alert('수정하였습니다');
                },
                error => {
                    alert('수정에 실패 하였습니다' + error);
                    this.ngOnInit();
                });
    }


    addRefTask(ref) {
        this.refTasks.concat(ref);
    }

    addTask(mission) {
        this.todoListService.addToDo(mission, this.refTasks)
            .subscribe(
                data => {
                    this.ngOnInit();
                },
                error => {
                    alert('등록에 실패 하였습니다' + error);
                    this.ngOnInit();
                });

    }

    // 페이징
    search(terms: string) {
        this.searchTermStream.next(terms);
    }

    // 모달
    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }
    open() {
        this.modal.open();
    }

}
