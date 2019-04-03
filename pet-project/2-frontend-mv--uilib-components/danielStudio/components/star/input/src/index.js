import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class StarInput extends Component {
  render() {
    const inputClasses = cx({
      'sktest-StarInput': true,
      [`sktest-StarInput--${this.props.size}`]: this.props.size,
      [`sktest-StarInput--${this.props.position}`]: this.props.position,
      [`sktest-StarInput--${this.props.color}`]: this.props.color,
      'is-rock': this.props.rock,
      'is-rounded': this.props.rounded
    })
    return (
      <input
        className={inputClasses}
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

StarInput.displayName = 'StarInput'

// StarInput.contextTypes = {i18n: PropTypes.object}
StarInput.propTypes = {
  placeholder: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
  rock: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
}
// StarInput.defaultProps = {}

export default StarInput
