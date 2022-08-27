import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public customer: Customer
  ) {
    if(this.customer != null){
      this.nameCustomer = customer.nameCustomer;
    }
  }

  close() {
    this.dialogRef.close();
  }

  UpDateCustomer() {
    const customer: Customer = {
      nameCustomer: this.nameCustomer,
      idCustomer: this.customer.idCustomer
    };

    this.ApiclientService.UpDate(customer).subscribe( response => {
      if(response.success === 1){
        this.dialogRef.close();
        this.snackBar.open('Cliente editado correctamente', '',{
          duration: 2000
        });
      }
    });
  }

  addCustomer() {
    const customer: Customer = {
      nameCustomer: this.nameCustomer,
      idCustomer: 0
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
