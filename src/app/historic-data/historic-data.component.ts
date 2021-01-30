import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css'],
})
export class HistoricDataComponent implements OnInit {
  // historicRates!: {

  // }

  constructor(private service: ExchangeRateService) {
    this.service
      .getHistoricRates('ILS', 'JPY', '2021-01-30', '2020-10-01')
      .subscribe((result) => {
        console.log('Historic Data : ' + result);
      });
  }

  ngOnInit(): void {}
}
