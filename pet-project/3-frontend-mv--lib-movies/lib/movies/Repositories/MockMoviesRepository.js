import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { Repository } from '@s-ui/domain';

var MockApiMoviesRepository =
/*#__PURE__*/
function (_Repository) {
  _inheritsLoose(MockApiMoviesRepository, _Repository);

  function MockApiMoviesRepository() {
    return _Repository.apply(this, arguments) || this;
  }

  var _proto = MockApiMoviesRepository.prototype;

  _proto.getDetail = function getDetail() {
    return Promise.resolve({
      Title: 'Avengers Assemble',
      Year: '2013–',
      Rated: 'TV-Y7',
      Released: '26 May 2013',
      Runtime: '23 min',
      Genre: 'Animation, Action, Adventure, Sci-Fi',
      Director: 'N/A',
      Writer: 'Jack Kirby, Joe Simon, Stan Lee',
      Actors: 'Roger Craig Smith, Troy Baker, Fred Tatasciore, Travis Willingham',
      Plot: "The further adventures of the Marvel Universe's mightiest general membership superhero team.",
      Language: 'English',
      Country: 'USA',
      Awards: '10 nominations.',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg',
      Ratings: [{
        Source: 'Internet Movie Database',
        Value: '7.0/10'
      }],
      Metascore: 'N/A',
      imdbRating: '7.0',
      imdbVotes: '5,625',
      imdbID: 'tt2455546',
      Type: 'series',
      totalSeasons: '5',
      Response: 'True'
    });
  };

  _proto.searchMovies = function searchMovies() {
    return Promise.resolve({
      Search: [{
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      }, {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
      }, {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
      }, {
        Title: 'The Avengers',
        Year: '1998',
        imdbID: 'tt0118661',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
      }, {
        Title: "The Avengers: Earth's Mightiest Heroes",
        Year: '2010–2012',
        imdbID: 'tt1626038',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'
      }, {
        Title: 'Ultimate Avengers',
        Year: '2006',
        imdbID: 'tt0491703',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg'
      }, {
        Title: 'Ultimate Avengers II',
        Year: '2006',
        imdbID: 'tt0803093',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
      }, {
        Title: 'The Avengers',
        Year: '1961–1969',
        imdbID: 'tt0054518',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg'
      }, {
        Title: 'Avengers Assemble',
        Year: '2013–',
        imdbID: 'tt2455546',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
      }, {
        Title: 'Avengers Assemble',
        Year: '2013–',
        imdbID: 'tt2455546',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
      }],
      totalResults: '91',
      Response: 'True'
    });
  };

  return MockApiMoviesRepository;
}(Repository);

export { MockApiMoviesRepository as default };