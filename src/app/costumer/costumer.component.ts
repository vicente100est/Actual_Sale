import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../services/apiclient.service';

import { MatDialog } from '@angular/material/dialog';

import { Response } from '../models/response';

import { DialogCustomerComponent } from './dialog/dialogcustomer.component';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {

  public lstCustomer: any[] = [];
  public columns: string[] = ['idCustomer', 'nameCustomer']

  constructor(
    private _apiClient: ApiclientService,
    public dialog: MatDialog
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
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }

}
