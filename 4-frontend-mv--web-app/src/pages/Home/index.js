import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router'
import 'isomorphic-fetch'
import domain from '../../../../3-frontend-mv--lib-movies/src'

import Spinner from '@s-ui/react-atom-spinner'
import AtomCard from '@s-ui/react-atom-card'
import AtomValidationText from '@s-ui/react-atom-validation-text'

import Search from '../../components/Search'

const HomePage = props => {
  function handleQueries(query, year) {
    props.router.push(`/?q=${query}&y=${year}`)
  }

  return (
    <div className="home-container">
      <h1>The Universe of Movies</h1>
      <div className="home-search">
        <Search
          getQueries={handleQueries}
          initialQueries={{
            q: props.router.getCurrentLocation().query.q,
            y: props.router.getCurrentLocation().query.y
          }}
        />
      </div>
      <div className="home-results">
        {!!props.error && (
          <AtomValidationText text="No results for this search, try again :)" />
        )}
        {!!props.results &&
          props.results.map(movie => {
            return (
              <div className="home-card">
                <Link to={`/detail/${movie.imdbID}`}>
                  <AtomCard
                    media={() => (
                      <img
                        src={movie.Poster}
                        alt={movie.Poster}
                        width={'300px'}
                      />
                    )}
                    content={() => (
                      <div className="atomCard-text">
                        <h2>{movie.Title}</h2>
                        <p>{movie.Year}</p>
                      </div>
                    )}
                    vertical
                  />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

HomePage.propTypes = {
  results: propTypes.array,
  router: propTypes.object,
  error: propTypes.object
}

HomePage.renderLoading = () => (
  <div className="spinner-container">
    <Spinner />
  </div>
)
HomePage.getInitialProps = ({routeInfo, context}) => {
  const query = routeInfo.location.query.q
    ? routeInfo.location.query.q
    : 'universe'
  const year = routeInfo.location.query.y ? routeInfo.location.query.y : '1919'
  return domain
    .get('search_movies_use_case')
    .execute({query, year})
    .then(response => ({results: response}))
    .catch(error => ({error}))
}

export default HomePage
