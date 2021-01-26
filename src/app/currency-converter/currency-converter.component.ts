import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  baseAmount = 1;
  amountFrom = 1;
  amountTo = 0;
  from = 'GBP';
  to = 'EUR';
  rates!: { [key: string]: number };

  convertAmountTo(): number {
    this.amountTo = this.amountFrom * this.rates[this.to];
    return this.amountTo;
  }

  convertAmountFrom(): number {
    this.amountFrom = this.amountTo * this.rates[this.from];
    return this.amountFrom;
  }

  showConversionRateFromBaseAmount(): number {
    // this.amountTo = this.amountFrom * this.rates[this.to];
    return this.baseAmount * this.rates[this.to];
  }

  loadRates() {
    this.service.getRates(this.from).subscribe((result) => {
      this.rates = result.rates;
    });
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  constructor(private service: ExchangeRateService) {
    this.service.getRates(this.from).subscribe((result) => console.log(result));
  }

  ngOnInit(): void {
    this.loadRates();
  }
}
