import {Mapper} from '@s-ui/domain'

export default class FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase extends Mapper {
  setYear(year) {
    this._year = year
    return this
  }
  map(response) {
    if (response.Search.constructor !== Array)
      throw TypeError(`${response} is not an array`)

    let mappedYearResponse = response.Search.filter(movie => {
      return Number(movie.Year.substring(0, 4)) >= Number(this._year)
    })

    let mappedImageResponse = mappedYearResponse.map(movie => {
      if (movie.Poster === 'N/A')
        movie.Poster =
          'http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg'
      return movie
    })

    if (!mappedImageResponse.length) throw Error('empty results')
    return mappedImageResponse
  }

  setImage(movieDetail) {
    if (movieDetail.Poster === 'N/A')
      movieDetail.Poster =
        'http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg'
    return movieDetail
  }
}
