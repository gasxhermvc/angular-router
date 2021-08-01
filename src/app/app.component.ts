import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-routes';

  constructor(private router: Router) {
    let scrollHistory: any = {};
    this.router.events.subscribe((evt: any) => {
      if (evt instanceof NavigationStart) {
        console.log('start navi', evt);
        if (!scrollHistory[evt.id]) {
          scrollHistory = {
            ...scrollHistory,
            [evt.id]: [window.scrollX, window.scrollY],
          };
        }
      }

      if (evt instanceof NavigationEnd) {
        console.log('end navi', evt);
        if (scrollHistory[evt.id - 1]) {
          setTimeout(() => {
            window.scroll(...scrollHistory[evt.id - 1]);
          }, 0);
        }
        console.log(scrollHistory);
        // console.log(scrollHistory[evt.id - 1]);
      }
    });
  }
}
