import ApiMoviesRepository from './ApiMoviesRepository';
import MockApiMoviesRepository from './MockMoviesRepository';
import MoviesMappersFactory from '../Mappers/factory';
import fetch from 'isomorphic-fetch';

var MoviesRepositoriesFactory = function MoviesRepositoriesFactory() {};

MoviesRepositoriesFactory.apiMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new ApiMoviesRepository({
    fetch: fetch,
    config: config,
    mapper: MoviesMappersFactory.fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase()
  });
};

MoviesRepositoriesFactory.mockApiMoviesRepository = function () {
  return new MockApiMoviesRepository({
    mapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase()
  });
};

export { MoviesRepositoriesFactory as default };