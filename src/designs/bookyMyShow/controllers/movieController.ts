class MovieController {
  cityVsMovies: Map<string, Array<Movie>>;
  allMovies: Array<Movie>;

  addMovie(movie: Movie) {
    this.allMovies.push(movie);
  }

  addMovieToCity(city: string, movie: Movie) {
    if (this.cityVsMovies.has(city)) {
      this.cityVsMovies.get(city)?.push(movie);
    } else {
      this.cityVsMovies.set(city, [movie]);
    }
  }
}
