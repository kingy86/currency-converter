export interface HistoricRateResponse {
  rates: {
    dates: {
      [key: string]: number;
    };
  };
  start_at: string;
  base: string;
  end_at: string;
}
