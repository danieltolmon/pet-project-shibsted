import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import MoviesRepository from './MovieRepository';

var ApiMoviesRepository =
/*#__PURE__*/
function (_MoviesRepository) {
  _inheritsLoose(ApiMoviesRepository, _MoviesRepository);

  function ApiMoviesRepository(_ref) {
    var _this;

    var fetch = _ref.fetch,
        config = _ref.config,
        mapper = _ref.mapper;
    _this = _MoviesRepository.call(this) || this;
    _this._fetch = fetch;
    _this._config = config;
    _this._mapper = mapper;
    return _this;
  }

  var _proto = ApiMoviesRepository.prototype;

  _proto.getDetail = function getDetail(_ref2) {
    var _this2 = this;

    var id = _ref2.id;
    return this._fetch(this._config.API_ENDPOINT + "&i=" + id).then(function (res) {
      return res.json();
    }).then(function (response) {
      return _this2._mapper.setImage(response);
    });
  };

  _proto.searchMovies = function searchMovies(_ref3) {
    var _this3 = this;

    var query = _ref3.query,
        year = _ref3.year;
    return this._fetch("http://www.omdbapi.com/?apikey=1b0be5c6&s=" + query).then(function (res) {
      return res.json();
    }).then(function (response) {
      return _this3._mapper.setYear(year).map(response);
    });
  };

  return ApiMoviesRepository;
}(MoviesRepository);

export { ApiMoviesRepository as default };