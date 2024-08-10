class BookMyShow {
  movieController: MovieController;
  theatreController: TheatreController;

  constructor() {
    this.movieController = new MovieController();
    this.theatreController = new TheatreController();
  }

  init() {}

  createMovies() {
    const bahubali = new Movie("Bahubali", 1, 100);
    const avengers = new Movie("Avengers", 2, 140);

    this.movieController.addMovie(bahubali);
    this.movieController.addMovie(avengers);

    this.movieController.addMovieToCity("delhi", avengers);
    this.movieController.addMovieToCity("bengaluru", bahubali);
    this.movieController.addMovieToCity("bengaluru", avengers);
  }
}
