import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  amount = 1;
  from = 'GBP';
  to = "EUR";
  rate = 1.12;

  convertAmount(): number{
    return this.amount * this.rate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
