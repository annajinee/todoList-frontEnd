import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Headers, Http, Response} from '@angular/http';
import {Router} from "@angular/router";
import {Task} from "../models/task";


@Injectable()
export class PostuserinfoService {

    private url: string;

    constructor(private http: Http, private router: Router,) {
        this.url = '/api/todo';
    }

    getToDoList(page): Observable<Task[]> {

        return this.http.post(this.url, {
            page: page
        }, {headers: this.prepareHeaders()})
            .map(res => <Task[]> res.json())
            .catch(this.handleError);
    }

    addToDo(mission, refTasks): Observable<Task[]> {

        return this.http.post(this.url, {
            task: Task
        }, {headers: this.prepareHeaders()})
            .map(res => <Task[]> res.json())
            .catch(this.handleError);
    }



    setEndYn(rowId, endYn): Observable<Task[]> {
        return this.http.put(this.url + '/' + rowId, {
            rowId: rowId,
            endYn: endYn
        }, {headers: this.prepareHeaders()})
            .catch(this.handleError);
    }

    editTask(task: Task): Observable<Task[]> {
        return this.http.put(this.url + '/' + task.rowId, {
            rowId: task.rowId,
            mission: task.mission,
            regDate: task.regDate,
            modDate: task.modDate,
            endYn: task.endYn
        }, {headers: this.prepareHeaders()})
            .catch(this.handleError);
    }

    prepareHeaders() {
        return new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
