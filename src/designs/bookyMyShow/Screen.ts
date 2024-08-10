class TheatreScreen {
  id: number;
  seats: Array<Seat>;

  constructor(id: number, seats: Array<Seat>) {
    this.id = id;
    this.seats = seats;
  }
}
