import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // name:string;
  // domain:string;
  // gender:string;
  // dob:string;
  // mobile:number;
  // location:string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
  const dialogRef =  this.dialog.open(ProfileComponent, {
    width: '800px',
    height: '500px',
    data: {  }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    // this.name = result;
    // this.domain = result;
  });
  }


}
