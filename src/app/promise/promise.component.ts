import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  timeNow: number = Date.now();
  resultantTime: number;
  constructor() { }

  ngOnInit() {
    /* create a new promise. */
    const p = new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello from Promise!');
      }, 5000);
    });

    /* log single value that is emitted. */
    p.then(value => this.resultantTime = Date.now());
  }


}
