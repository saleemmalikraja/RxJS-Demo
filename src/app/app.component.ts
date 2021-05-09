import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS-Demo';
  currentTitle = 'Promise';
  private previousUrl: string;
  private currentUrl: string;

  clickedGetStarted = !!sessionStorage.getItem('rxjs') || false;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = this.currentTitle = event.url;
        this.currentTitle = this.currentTitle.replace('/', '').toUpperCase();
      }
    });
  }
  changeTitle(title) {
    this.currentTitle = title;
  }
  changeMenu() {
    sessionStorage.setItem('rxjs', 'true');
    this.clickedGetStarted = !!sessionStorage.getItem('rxjs');
  }
}
