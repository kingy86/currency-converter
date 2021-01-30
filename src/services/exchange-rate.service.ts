import { HttpClient } from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateResponse } from './payloads/exchange-rate-response';
import { HistoricRateResponse } from './payloads/historic-rate-response';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  constructor(private httpClient: HttpClient) {}
  getRates(base: string): Observable<ExchangeRateResponse> {
    return this.httpClient.get<ExchangeRateResponse>(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
  }
  getHistoricRates(
    convertTo: string,
    convertFrom: string,
    dateFrom: string,
    dateTo: string
  ): Observable<HistoricRateResponse> {
    return this.httpClient.get<HistoricRateResponse>(
      `https://api.exchangeratesapi.io/history?start_at=${dateFrom}&end_at=${dateTo}&symbols=${convertTo},${convertFrom}`
    );
  }
}
