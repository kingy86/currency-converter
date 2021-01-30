export interface HistoricRateResponse {
  rates: {
    date: {
      [key: string]: number;
    };
  };
}
