import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { Repository } from '@s-ui/domain';

var MoviesRepository =
/*#__PURE__*/
function (_Repository) {
  _inheritsLoose(MoviesRepository, _Repository);

  function MoviesRepository() {
    return _Repository.apply(this, arguments) || this;
  }

  var _proto = MoviesRepository.prototype;

  _proto.getDetail = function getDetail() {
    throw new Error('[getDetail] method must be implemented');
  };

  _proto.searchMovies = function searchMovies() {
    throw new Error('[searchMovies] method must be implemented');
  };

  return MoviesRepository;
}(Repository);

export { MoviesRepository as default };