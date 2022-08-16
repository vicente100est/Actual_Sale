import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../services/apiclient.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {

  constructor(
    private _apiClient: ApiclientService
  ) {
    _apiClient.getCustomers().subscribe( reponse => {
      console.log(reponse);
    })
  }

  ngOnInit(): void {
  }

}
