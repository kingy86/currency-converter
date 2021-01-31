import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css'],
})
export class HistoricDataComponent implements OnInit {
  rates!: {};
  from = 'GBP';
  year = '2020';
  data = [];

  loadHistoricRates() {
    this.service.getHistoricRates(this.from, this.year).subscribe((result) => {
      this.rates = result.rates;
    });
  }

  fetchDates() {
    let dates = Object.keys(this.rates);
    return dates;
  }

  fetchValues() {
    let objOfRates = Object.values(this.rates);
    let keyOfObj = Object.values(objOfRates);
    return Object.values(keyOfObj);
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
