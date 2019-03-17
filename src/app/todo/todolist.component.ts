import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ToDoListService} from '../services/todolist.service';
import {ToDoListData} from '../models/todolist';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import 'rxjs/add/observable/of';
import {Pageinfo} from '../models/pageinfo';
import {ToDoRefData} from '../models/todoref';


@Component({
    selector: 'app-postuserinfo',
    templateUrl: 'todolist.component.html'
})
export class ToDoListComponent implements OnInit {

    toDoDatas: ToDoListData[];
    total$: Observable<number>;
    pageInfo: Pageinfo;
    page: number = 1;
    selected: string;
    output: string;
    toDoDetailData: ToDoListData;
    refDetailData: ToDoRefData[];

    @ViewChild('modal')
    modal: ModalComponent;

    @ViewChild('modalDetail')
    modalDetail: ModalComponent;


    constructor(private todoListService: ToDoListService) {
    }


    ngOnInit() {
        if (this.page < 1) {
            this.page = 1;
        }
        this.getToDoList(this.page);
    }

    openTaskModal() {
        this.modal.open();
    }

    openTodoDetailModal(toDoData: ToDoListData) {
        this.toDoDetailData = toDoData;
        this.refDetailData = toDoData.refData;
        this.modalDetail.open();
    }

    getToDoList(page) {
        this.todoListService.getToDoList(page - 1, 5)
            .subscribe(
                result => {
                    this.toDoDatas = result['dataList'];
                    this.pageInfo = result['pageInfo'];
                    this.page = this.pageInfo.pageNumber;
                    this.total$ = Observable.of(this.pageInfo.totalPage);
                },
                error => {
                    alert(error);
                });
    }


    setEndYn(rowId) {
        this.todoListService.setEndYn(rowId)
            .subscribe(
                result => {
                    this.getToDoList(this.page + 1);
                },
                error => {
                    if (error.toString().includes('304')) {
                        alert('참조된 일이 완료 되지 않아 변경할 수 없습니다');
                    } else {
                        alert('상태 변경을 실패 하였습니다');
                        this.ngOnInit();
                    }
                });
    }

    editToDo(toDo) {
        this.todoListService.editTodo(this.toDoDetailData.rowId, toDo)
            .subscribe(
                result => {
                    alert('수정하였습니다');
                    location.reload();
                },
                error => {
                    alert('수정에 실패 하였습니다' + error);
                    location.reload();
                });
    }


    addTodo(todo, refIds) {
        const refIdArray: Array<number> = [];
        if (refIdArray.length > 0) {
            refIds.split(',');
        }
        this.todoListService.addToDo(todo, refIdArray)
            .subscribe(
                reulst => {
                    alert('등록하였습니다');
                    location.reload();
                },
                error => {
                    alert('등록에 실패 하였습니다' + error);
                    location.reload();
                });
    }


    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }
}
