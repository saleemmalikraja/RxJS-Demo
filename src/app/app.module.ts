import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModules } from './app.module.imports';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { SubjectComponent } from './subject/subject.component';
import { DatePipe } from '@angular/common';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { OperatorsComponent } from './operators/operators.component';

const appRoutes: Routes = [
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'behaviour-subject', component: BehaviourSubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'simple-observable', component: SimpleObservableComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    SimpleObservableComponent,
    SubjectComponent,
    AsyncSubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes , {useHash: true}),
    ...MaterialModules ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
