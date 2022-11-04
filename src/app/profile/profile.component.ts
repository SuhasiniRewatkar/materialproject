import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  // name: new FormControl;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm () {
    this.profileForm = this.fb.group({
      name: new FormControl(''),
      domain: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      mobile: new FormControl('', Validators.pattern("^[7-9][0-9]{9}$")),
      location: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  public  closeMe() {
    this.dialogRef.close();
}
}
