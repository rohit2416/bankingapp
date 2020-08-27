import { Component, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.component.html',
  styleUrls: ['./confirm-transaction.component.css']
})
export class ConfirmTransactionComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


    close(): void {
    

    this.dialogRef.close();

  }

}
