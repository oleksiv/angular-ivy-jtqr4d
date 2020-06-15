import { Component, VERSION, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    //
  }

  ngOnInit() {
    this.form = this.fb.group({
      query: this.fb.control(''),
    });
  }
}
