import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }

  searchMovies() {
    throw new Error('[searchMovies] method must be implemented')
  }
}
