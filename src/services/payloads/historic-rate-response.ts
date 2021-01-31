export interface HistoricRateResponse {
  rates: {
    date: {
      // [key: string]: number;
    };

    start_at: string;
    base: string;
    end_at: string;
  };
}
