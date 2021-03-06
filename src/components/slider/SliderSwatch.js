'use strict' /* @flow */

import React from 'react'
import reactCSS from 'reactcss'
import shallowCompare from 'react-addons-shallow-compare'

export class SliderSwatch extends React.Component {
  shouldComponentUpdate = shallowCompare.bind(this, this, arguments[0], arguments[1])

  handleClick = () => {
    this.props.onClick({
      h: this.props.hsl.h,
      s: 0.5,
      l: this.props.offset,
      source: 'hsl',
    })
  }

  render(): any {
    const styles = reactCSS({
      'default': {
        swatch: {
          height: '12px',
          background: `hsl(${ this.props.hsl.h }, 50%, ${ (this.props.offset * 100) }%)`,
          cursor: 'pointer',
        },
      },
      'first': {
        swatch: {
          borderRadius: '2px 0 0 2px',
        },
      },
      'last': {
        swatch: {
          borderRadius: '0 2px 2px 0',
        },
      },
      'active': {
        swatch: {
          transform: 'scaleY(1.8)',
          borderRadius: '3.6px/2px',
        },
      },
    }, this.props)

    return (
      <div style={ styles.swatch } ref="swatch" onClick={ this.handleClick } />
    )
  }

}

export default SliderSwatch
