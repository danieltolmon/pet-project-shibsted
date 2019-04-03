import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { Mapper } from '@s-ui/domain';

var FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase =
/*#__PURE__*/
function (_Mapper) {
  _inheritsLoose(FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase, _Mapper);

  function FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase() {
    return _Mapper.apply(this, arguments) || this;
  }

  var _proto = FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase.prototype;

  _proto.setYear = function setYear(year) {
    this._year = year;
    return this;
  };

  _proto.map = function map(response) {
    var _this = this;

    if (response.Search.constructor !== Array) throw TypeError(response + " is not an array");
    var mappedYearResponse = response.Search.filter(function (movie) {
      return Number(movie.Year.substring(0, 4)) >= Number(_this._year);
    });
    var mappedImageResponse = mappedYearResponse.map(function (movie) {
      if (movie.Poster === 'N/A') movie.Poster = 'http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg';
      return movie;
    });
    if (!mappedImageResponse.length) throw Error('empty results');
    return mappedImageResponse;
  };

  _proto.setImage = function setImage(movieDetail) {
    if (movieDetail.Poster === 'N/A') movieDetail.Poster = 'http://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg';
    return movieDetail;
  };

  return FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase;
}(Mapper);

export { FromApiMoviesRepositorySearchResponseToSearchMoviesUseCase as default };