
export class Flight {
  source: string;
  destination: string;
  depature: {
    iataCode: string;
    at: string;
    terminal: number;
  };
  arrival: {
    iataCode: string;
    at: string;
    terminal: number;
  };
  'price': {
    currency: string;
    total: number;
    base: number;
  };
}
