import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css'],
})
export class HistoricDataComponent implements OnInit {
  historicRates!: {};

  loadHistoricRates() {
    this.service.getHistoricRates('GBP', '2019').subscribe((result) => {
      return console.log((this.historicRates = result));
    });
  }

  constructor(private service: ExchangeRateService) {
    this.service.getHistoricRates('ILS', '2019').subscribe((result) => {});
  }

  ngOnInit(): void {
    this.loadHistoricRates();
  }
}
