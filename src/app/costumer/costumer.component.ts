import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../services/apiclient.service';

import { MatDialog } from '@angular/material/dialog';

import { Response } from '../models/response';

import { DialogCustomerComponent } from './dialog/dialogcustomer.component';
import { Customer } from '../models/customer';
import { DialogDeleteComponent } from '../common/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {

  public lstCustomer: any[] = [];
  public columns: string[] = ['idCustomer', 'nameCustomer', 'actions'];
  readonly width: string = '300px';

  constructor(
    private _apiClient: ApiclientService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this._apiClient.getCustomers().subscribe( reponse => {
      this.lstCustomer = reponse.data;
    });
  }

  openAdd() {
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }

  openEdit(customer: Customer){
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: this.width,
      data: customer
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }

  delete(customer: Customer) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this._apiClient.Delete(customer.idCustomer).subscribe( response => {
          if(response.success === 1) {
            this.snackBar.open('Cliente eliminado correctamente', '', {
              duration: 2000
            });
            this.getCustomers();
          }
        });
      }
    });
  }

}
