import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css'],
})
export class HistoricDataComponent implements OnInit {
  rates!: {};
  from = 'GBP';
  year = '2020';

  loadHistoricRates() {
    this.service.getHistoricRates(this.from, this.year).subscribe((result) => {
      this.rates = result.rates;
      console.log(this.rates);
    });
  }

  constructor(private service: ExchangeRateService) {
    this.service.getHistoricRates(this.from, this.year).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.loadHistoricRates();
  }
}
