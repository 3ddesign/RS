import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  public constructor(public dialogRef: MatDialogRef<FormModalComponent>,
                     @Inject(MAT_DIALOG_DATA) public data: any,
                     private router: Router) {
  }

  public ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public leaveOrganization(): void {
  }
}
