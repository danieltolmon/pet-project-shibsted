import React from 'react'
import propTypes from 'prop-types'
import 'isomorphic-fetch'

import domain from '../../../../3-frontend-mv--lib-movies/src'
import Spinner from '@s-ui/react-atom-spinner'
import Button from '../../../../2-frontend-mv--uilib-components/danielStudio/components/star/button/src'

const DetailPage = props => {
  const {movie} = props

  function setRate(rate) {
    if (rate <= 5) return 'bad'
    else if (rate > 5 && rate <= 7) return 'medium'
    if (rate > 7) return 'good'
  }

  return (
    <div className="detail-container">
      <Button
        onClick={() => props.router.goBack()}
        name="Go Back"
        type="gas"
        color="venus"
        size="neutron"
      />
      <h2>{movie.Title}</h2>
      <div className="detail-info">
        <div className="detail-image">
          <img src={movie.Poster} />
          {
            <div className={`detail-rating-${setRate(movie.imdbRating)}`}>
              {movie.imdbRating}
            </div>
          }
        </div>
        <div className="detail-text">
          <h3 className="detail-text-first">Genre</h3>
          <div>{movie.Genre}</div>
          <h3>Director</h3>
          <div>{movie.Director}</div>
          <h3>Writer</h3>
          <div>{movie.Writer}</div>
          <h3>Actors</h3>
          <div>{movie.Actors}</div>
          <h3>Description</h3>
          <div>{movie.Plot}</div>
        </div>
      </div>
    </div>
  )
}

DetailPage.propTypes = {
  movie: propTypes.object,
  router: propTypes.object
}

DetailPage.renderLoading = () => (
  <div className="spinner-container">
    <Spinner />
  </div>
)

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const id = routeInfo.params.id

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(response => {
      return {movie: response}
    })
}

export default DetailPage
