import FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase from './FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase';
import FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase from './FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase';

var Moviesmappers = function Moviesmappers() {};

Moviesmappers.fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase = function () {
  return new FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase();
};

Moviesmappers.fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase = function () {
  return new FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase();
};

export { Moviesmappers as default };