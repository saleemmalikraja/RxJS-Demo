import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {
  initialInput = Date.now();
  result;
  constructor() { }

  ngOnInit() {

    /* create a new observable, providing the observer. */
    const observable: Observable<string> = new Observable(observer => {
      setInterval(() => {
        observer.next(Date.now().toString());
      }, 1000); // emitting series of values over time

    });

    /* Subscribe to Notifications. */
    observable.subscribe(value => this.result = value);

    /* TAKEAWAY */
    // Observables are simply function that take an observer and return a function
  }

}
