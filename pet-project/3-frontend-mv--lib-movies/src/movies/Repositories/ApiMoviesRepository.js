import MoviesRepository from './MovieRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch, config, mapper}) {
    super()

    this._fetch = fetch
    this._config = config
    this._mapper = mapper
  }

  getDetail({id}) {
    return this._fetch(`${this._config.API_ENDPOINT}&i=${id}`)
      .then(res => res.json())
      .then(response => this._mapper.setImage(response))
  }

  searchMovies({query, year}) {
    return this._fetch(`http://www.omdbapi.com/?apikey=1b0be5c6&s=${query}`)
      .then(res => res.json())
      .then(response => this._mapper.setYear(year).map(response))
  }
}
