import ApiMoviesRepository from './ApiMoviesRepository'
import MockApiMoviesRepository from './MockMoviesRepository'

import MoviesMappersFactory from '../Mappers/factory'
import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = ({config}) =>
    new ApiMoviesRepository({
      fetch,
      config,
      mapper: MoviesMappersFactory.fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase()
    })

  static mockApiMoviesRepository = () =>
    new MockApiMoviesRepository({
      mapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase()
    })
}
