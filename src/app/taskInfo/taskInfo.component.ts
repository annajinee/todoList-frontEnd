import {
    Component,
        OnInit, ViewChild,
} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {PostuserinfoService} from "../services/taskInfo.service";
import {Task} from "../models/task";
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    selector: 'app-postuserinfo',
    templateUrl: 'taskInfo.component.html'
})
export class PostuserinfoComponent implements OnInit {

    tasks: Task[];
    rowId: number;
    endYn: string;
    refTasks : Array<number>;
    model: any = {};
    // 페이징
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

    @ViewChild('modal')
    modal: ModalComponent;


    constructor(private postuserinfoservice: PostuserinfoService) {
    }


    ngOnInit() {
        this.getToDoList(this.page);
    }

    openTaskModal(){
        this.modal.open();
    }


    getToDoList(page) {
        this.postuserinfoservice.getToDoList(page)
            .subscribe(
                result => {
                    this.tasks = result['content'];
                    this.totalPages = result['totalPages'];
                    this.totalElements = result['totalElements'];
                    this.last = result['last'];
                    this.size = result['size'];
                    this.number = result['number'];
                    this.numberOfElements = result['numberOfElements'];
                    this.page = result['number'];
                    this.total$ = Observable.of(this.totalElements);
                },
                error => {
                    alert(error);
                });
    }


    setEndYn(task: Task, endYn) {

        var rowId = task.rowId;
        this.postuserinfoservice.setEndYn(this.rowId, this.endYn)
            .subscribe(
                data => {
                    this.ngOnInit();
                },
                error => {
                    alert('상태 변경을 실패 하였습니다' + error);
                    this.ngOnInit();
                });

    }

    editTask(task: Task) {

        this.postuserinfoservice.editTask(task)
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


    addRefTask(ref){
        this.refTasks.concat(ref);
    }

    addTask(mission){
        this.postuserinfoservice.addToDo(mission, this.refTasks)
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
        this.searchTermStream.next(terms)
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
