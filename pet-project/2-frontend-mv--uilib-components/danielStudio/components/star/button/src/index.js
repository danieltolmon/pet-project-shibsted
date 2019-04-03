import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

function StarButton(props) {
  const {name, size, color, type, onClick} = props
  const classes = cx({
    'sktest-StarButton': true,
    [`sktest-StarButton--${size}`]: size,
    [`sktest-StarButton--${color}`]: color,
    [`${type}`]: type
  })

  return (
    <button className={classes} onClick={onClick}>
      {name}
    </button>
  )
}

StarButton.displayName = 'StarButton'

StarButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default StarButton
