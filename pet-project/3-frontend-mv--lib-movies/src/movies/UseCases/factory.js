import DetailMoviesUseCase from './DetailMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import MoviesRepositories from '../Repositories/factory'

export default class DetailMoviesUseCaseFactory {
  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositories.apiMoviesRepository({config})
    })
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositories.apiMoviesRepository({config})
    })
}
