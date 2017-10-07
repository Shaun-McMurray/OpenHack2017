import React, { Component } from 'react'
import d3 from 'd3'

export default class Octagon extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <svg width={this.props.size} height={this.props.size}>
        <polygon
          fill="white"
          stroke="black"
          stroke-width="25"
          points={((this.props.size * 0.3) + 10), 10 + " 575,15 815,255 815,575 575,815 255,815 15,575 15,255"} />
        <polygon
          fill="white"
          stroke="black"
          stroke-width="5"
          points="255,15 575,815"
        />
        <polygon
          fill="white"
          stroke="black"
          stroke-width="5"
          points="575,15 255,815"
        />
        <polygon
          fill="white"
          stroke="black"
          stroke-width="5"
          points="815,255 15,575"
        />
        <polygon
          fill="white"
          stroke="black"
          stroke-width="5"
          points="15,255 815,575"
        />
      </svg>
    );
  }
}
