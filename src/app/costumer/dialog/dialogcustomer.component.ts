import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ApiclientService } from '../../services/apiclient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from 'src/app/models/customer';

@Component({
  templateUrl: 'dialogcustomer.component.html',
})

export class DialogCustomerComponent{

  public nameCustomer: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogCustomerComponent>,
    public ApiclientService: ApiclientService,
    public snackBar: MatSnackBar
  ) { }

  close() {
    this.dialogRef.close();
  }

  addCustomer() {
    const customer: Customer = {
      nameCustomer: this.nameCustomer
    };
    this.ApiclientService.add(customer).subscribe( response => {
      if(response.success === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente insertado correctamente', '',{
          duration: 2000
        });
      }
    });
  }
}
