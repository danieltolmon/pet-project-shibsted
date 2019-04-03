import DetailMoviesUseCase from './DetailMoviesUseCase';
import SearchMoviesUseCase from './SearchMoviesUseCase';
import MoviesRepositories from '../Repositories/factory';

var DetailMoviesUseCaseFactory = function DetailMoviesUseCaseFactory() {};

DetailMoviesUseCaseFactory.detailMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new DetailMoviesUseCase({
    config: config,
    repository: MoviesRepositories.apiMoviesRepository({
      config: config
    })
  });
};

DetailMoviesUseCaseFactory.searchMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new SearchMoviesUseCase({
    config: config,
    repository: MoviesRepositories.apiMoviesRepository({
      config: config
    })
  });
};

export { DetailMoviesUseCaseFactory as default };