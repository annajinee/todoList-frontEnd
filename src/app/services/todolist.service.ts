import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {ToDoListData} from '../models/todolist';
import 'rxjs/add/operator/catch';

@Injectable()
export class ToDoListService {

    private url: string;

    constructor(private http: Http, private router: Router,) {
        this.url = '/todo';
    }

    getToDoList(position, size): Observable<ToDoListData[]> {
        return this.http.get(this.url + '/list/' + position + '/' + size,
            {headers: this.prepareHeaders()})
            .map(res => res.json())
            .catch(this.handleError);
    }

    addToDo(toDo, refIds) {
        return this.http.post(this.url, {
            toDo: toDo,
            refId: refIds
        }, {headers: this.prepareHeaders()})
            .map(res => res)
            .catch(this.handleError);
    }


    setEndYn(rowId): Observable<ToDoListData[]> {
        return this.http.put(this.url + '/' + rowId, {
            rowId: rowId,
            endYn: 'Y'
        }, {headers: this.prepareHeaders()})
            .map(res => res)
            .catch(res => res.status);
    }

    editTodo(rowId, toDo) {
        return this.http.put(this.url + '/' + rowId, {
            rowId: rowId,
            toDo: toDo
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
