import React, { Component } from 'react'
import d3 from 'd3'

class Octagon extends Component {
  render {
    return(
      <svg width="50" height="50">
        <polygon
          fill="yellow"
          stroke="blue"
          stroke-width="2"
          points="05,30 15,10 25,30" />
      </svg>
    );
  }
}
