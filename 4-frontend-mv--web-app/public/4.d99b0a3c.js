(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Vz7R:function(e,t,r){"use strict";r.r(t);var i=r("mXGw"),n=r.n(i),o=(r("W0B4"),r("tYyp")),a=(r("WRm0"),r("ayjw")),s=r("ltYx"),m=r.n(s),c=function(e){var t=e.movie;return n.a.createElement("div",null,n.a.createElement("h1",null,"DetailPage"),n.a.createElement("div",null,n.a.createElement("h2",null,t.Title),n.a.createElement("img",{src:t.Poster})),n.a.createElement(o.b,{to:"/"},"Go Home"))};c.renderLoading=function(){return n.a.createElement(m.a,null)},c.getInitialProps=function(e){var t=e.routeInfo,r=(e.context,t.params.id);return a.a.get("detail_movies_use_case").execute({id:r}).then(function(e){return{movie:e}})},t.default=c},ayjw:function(e,t,r){"use strict";var i=r("4NoI"),n=r("7GGI"),o=r.n(n),a=r("PG3i"),s=r.n(a),m=r("m9iK"),c=r.n(m),u=function(e){function t(t){var r,i=t.config,n=t.repository;return(r=e.call(this)||this)._config=i,r._repository=n,r}return c()(t,e),t.prototype.execute=function(){var e=s()(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.abrupt("return",this._repository.getDetail({id:r}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}(i.d),p=function(e){function t(t){var r,i=t.config,n=t.repository;return(r=e.call(this)||this)._config=i,r._repository=n,r}return c()(t,e),t.prototype.execute=function(){var e=s()(o.a.mark(function e(t){var r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,i=t.year,e.abrupt("return",this._repository.searchMovies({query:r,year:i}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}(i.d),M=function(e){function t(t){var r,i=t.fetch,n=t.config,o=t.mapper;return(r=e.call(this)||this)._fetch=i,r._config=n,r._mapper=o,r}c()(t,e);var r=t.prototype;return r.getDetail=function(e){var t=e.id;return this._fetch(this._config.API_ENDPOINT+"&i="+t).then(function(e){return e.json()})},r.searchMovies=function(e){var t=this,r=e.query,i=e.year;return this._fetch("http://www.omdbapi.com/?apikey=1b0be5c6&s="+r).then(function(e){return e.json()}).then(function(e){return t._mapper.setYear(i).map(e)})},t}(function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var r=t.prototype;return r.getDetail=function(){throw new Error("[getDetail] method must be implemented")},r.searchMovies=function(){throw new Error("[searchMovies] method must be implemented")},t}(i.c)),h=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var r=t.prototype;return r.getDetail=function(){return Promise.resolve({Title:"Avengers Assemble",Year:"2013–",Rated:"TV-Y7",Released:"26 May 2013",Runtime:"23 min",Genre:"Animation, Action, Adventure, Sci-Fi",Director:"N/A",Writer:"Jack Kirby, Joe Simon, Stan Lee",Actors:"Roger Craig Smith, Troy Baker, Fred Tatasciore, Travis Willingham",Plot:"The further adventures of the Marvel Universe's mightiest general membership superhero team.",Language:"English",Country:"USA",Awards:"10 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.0/10"}],Metascore:"N/A",imdbRating:"7.0",imdbVotes:"5,625",imdbID:"tt2455546",Type:"series",totalSeasons:"5",Response:"True"})},r.searchMovies=function(){return Promise.resolve({Search:[{Title:"The Avengers",Year:"2012",imdbID:"tt0848228",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{Title:"Avengers: Age of Ultron",Year:"2015",imdbID:"tt2395427",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{Title:"Avengers: Infinity War",Year:"2018",imdbID:"tt4154756",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},{Title:"The Avengers",Year:"1998",imdbID:"tt0118661",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{Title:"The Avengers: Earth's Mightiest Heroes",Year:"2010–2012",imdbID:"tt1626038",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},{Title:"Ultimate Avengers",Year:"2006",imdbID:"tt0491703",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg"},{Title:"Ultimate Avengers II",Year:"2006",imdbID:"tt0803093",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{Title:"The Avengers",Year:"1961–1969",imdbID:"tt0054518",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"},{Title:"Avengers Assemble",Year:"2013–",imdbID:"tt2455546",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"},{Title:"Avengers Assemble",Year:"2013–",imdbID:"tt2455546",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"}],totalResults:"91",Response:"True"})},t}(i.c),l=r("RUjJ"),f=r.n(l),T=r("M3Y3"),g=r.n(T),v=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.map=function(e){var t=e.movieName,r=e.image,i=g()(e,["movieName","image"]);return f()({Title:t,Poster:r},i)},t}(i.b),y=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var r=t.prototype;return r.setYear=function(e){return this._year=e,this},r.map=function(e){var t=this;return e.Search.filter(function(e){return Number(e.Year.substring(0,4))>=Number(t._year)})},t}(i.b),d=function(){};d.fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase=function(){return new v},d.fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase=function(){return new y};var N=r("VQjK"),D=r.n(N),_=function(){};_.apiMoviesRepository=function(e){var t=e.config;return new M({fetch:D.a,config:t,mapper:d.fromApiMoviesRepositorySearchResponseToSearchMoviesUseCase()})},_.mockApiMoviesRepository=function(){return new h({mapper:d.fromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase()})};var w=function(){};w.detailMoviesUseCase=function(e){var t=e.config;return new u({config:t,repository:_.apiMoviesRepository()})},w.searchMoviesUseCase=function(e){var t=e.config;return new p({config:t,repository:_.apiMoviesRepository({config:t})})};var Y={API_ENDPOINT:"http://www.omdbapi.com/?&apikey=1b0be5c6"},A={detail_movies_use_case:w.detailMoviesUseCase({config:Y}),search_movies_use_case:w.searchMoviesUseCase({config:Y})},V=Object(i.a)({useCases:A});t.a=new V}}]);