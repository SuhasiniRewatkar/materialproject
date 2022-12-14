import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav! : MatSidenav

  title = 'ui-test';

  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    // this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
    //   if(res.matches) {
    //     this.sidenav.mode = 'over';
    //     this.sidenav.close();
    //   }
    //   else {
    //     this.sidenav.mode = 'side';
    //     this.sidenav.open();
    //   }
    // });
  }
}
