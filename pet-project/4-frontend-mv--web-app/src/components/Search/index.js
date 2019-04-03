import React, {useState} from 'react'
import propTypes from 'prop-types'
import Button from '../../../../2-frontend-mv--uilib-components/danielStudio/components/star/button/src'
import Input from '../../../../2-frontend-mv--uilib-components/danielStudio/components/star/input/src'
import StarRange from '../../../../2-frontend-mv--uilib-components/danielStudio/components/star/range/src'

const Search = ({getQueries, initialQueries}) => {
  const [input, setInput] = useState(initialQueries.q)
  const [range, setRange] = useState(initialQueries.y)

  function handleOnSubmit(event) {
    event.preventDefault()
    getQueries(input, range)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="search-range">
          <Input
            onChange={e => setInput(e.target.value)}
            size="giant"
            color="earth"
            value={input}
            rounded
          />
          <Button name="Search" color="earth" type="rock" size="dwarf" />
        </div>
        <div className="search-range">
          <span>Year</span>
          <StarRange
            color="earth"
            size="dwarf"
            max={2019}
            min={1919}
            onChange={e => setRange(Number(e.target.value))}
            value={range}
          />
          <span>{range}</span>
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
  getQueries: propTypes.function,
  initialQueries: propTypes.object
}

Search.contextTypes = {
  routeInfo: propTypes.object
}

Search.getInitialProps = ({routeInfo, context}) => {
  const query = routeInfo.location.query.q
    ? routeInfo.location.query.q
    : 'universe'
  const year = routeInfo.location.query.y ? routeInfo.location.query.y : '1919'
  const params = {query, year}
  return params
}

export default Search
