import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {PaginationComponent} from './pagination/pagination.component';
import {PostuserinfoService} from "./services/taskInfo.service";
import {PostuserinfoComponent} from "./taskInfo/taskInfo.component";

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
        PostuserinfoComponent
    ],
    providers: [
        PostuserinfoService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
