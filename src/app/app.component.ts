import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audit-assist';
  showHead: boolean = true;
  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          console.log(event)
          if (event['url'] == '/login' || event['url'] == '/') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }
    isShown: boolean = false ; // hidden by default


    toggleShow() {

    this.isShown = ! this.isShown;
    }
  ngOnInit() {

  }


}
