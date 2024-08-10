class Theatre {
  id: number;
  city: string;
  screens: Array<TheatreScreen>;
  shows: Array<Show>;

  constructor(id: number, city: string, screen: Array<TheatreScreen>) {
    this.id = id;
    this.city = city;
    this.screens = screen;
  }

  addShow(show: Show) {
    this.shows.push(show);
  }
}
