import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class StarRange extends Component {
  render() {
    const rangeClasses = cx({
      'sktest-StarRange': true,
      [`sktest-StarRange--${this.props.color}`]: this.props.color,
      [`sktest-StarRange--${this.props.size}`]: this.props.size
    })

    return (
      <input
        className={rangeClasses}
        max={this.props.max}
        min={this.props.min}
        type="range"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

StarRange.displayName = 'StarRange'

// StarRange.contextTypes = {i18n: PropTypes.object}
StarRange.propTypes = {
  color: PropTypes.oneOf([
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus'
  ]),
  min: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.value
}
StarRange.defaultProps = {
  min: 0,
  max: 100,
  size: 'dwarf'
}

export default StarRange
