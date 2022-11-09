import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = true;
  win: any = window;
  isMobile: Boolean = false;
  constructor() {
    this.isMobile = this.win?.visualViewport?.width < 500;
    this.opened = this.isMobile ? false : true;
   }

  ngOnInit(): void {
  }

}
