import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
  constructor() { }
   openMenu(x : any){
      x.open();
   }
  ngOnInit(): void {
  }

}
