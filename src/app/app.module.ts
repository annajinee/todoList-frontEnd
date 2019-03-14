import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {PaginationComponent} from './pagination/pagination.component';
import {ToDoListService} from './services/todolist.service';
import {ToDoListComponent} from './taskInfo/todolist.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        Ng2Bs3ModalModule
    ],
    declarations: [
        AppComponent,
        PaginationComponent,
        ToDoListComponent
    ],
    providers: [
        ToDoListService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
