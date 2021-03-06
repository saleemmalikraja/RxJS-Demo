import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  subject = new AsyncSubject<string>();
  resultantObj = {};
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  observer1() {
    this.subject.subscribe(
      next => {
        console.log(`%c${next}`, 'color:green', ` - ${this.datePipe.transform(new Date(), 'mediumTime')}`);
        this.resultantObj[next] = `${next} - ${this.datePipe.transform(new Date(), 'mediumTime')}`;
      },
      error => {
        console.log(`%c${error}`, 'color:red');
      },
      () => {
        console.log('I am a %cOBSERVER-ONE',
         'color: white; background-color: green; padding: 2px 5px; border-radius: 2px' , 'Subscription is over');
      }
    );
    this.subject.next(`first observable`);
    //  this.subject.error('first error');

  }

  observer2() {
    this.subject.pipe().subscribe(
      next => {
        console.log(`%c${next}`, 'color:orange', ` - ${this.datePipe.transform(new Date(), 'mediumTime')}`);
        this.resultantObj[next] = `${next} - ${this.datePipe.transform(new Date(), 'mediumTime')}`;
      },
      error => {
        console.warn(`%c${error}`, 'color:red');
      },
      () => {
        console.log('I am a %cOBSERVER-TWO',
         'color: white; background-color: orange; padding: 2px 5px; border-radius: 2px' , 'Subscription is over');
      }
    );

    this.subject.next(`second observable`);
    // this.subject.complete();
  }

  observer3() {
    this.subject.next('late observable');
  }

  complete() {
    console.log(`Triggering complete`);
    this.subject.complete();
  }

}
