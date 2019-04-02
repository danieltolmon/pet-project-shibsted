import FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase from './FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase'
import FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase from './FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase'

export default class Moviesmappers {
  static fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase = () =>
    new FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase()
  static fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase = () =>
    new FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase()
}
