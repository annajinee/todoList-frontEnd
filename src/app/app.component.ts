import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  constructor(private router: Router,route: ActivatedRoute) {
  }

}
