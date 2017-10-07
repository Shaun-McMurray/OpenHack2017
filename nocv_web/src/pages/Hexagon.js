import React, { Component } from 'react'
import * as d3 from 'd3'

export const Hexagon = ({size}) => {
    return(
      <div>
      </div>

    );
}

var h = (Math.sqrt(3)/2),
    radius = 150,
    xp = 250,
    yp = 150,
    hexagonData = [
      { "x": radius+xp,   "y": yp},
      { "x": radius/2+xp,  "y": radius*h+yp},
      { "x": -radius/2+xp,  "y": radius*h+yp},
      { "x": -radius+xp,  "y": yp},
      { "x": -radius/2+xp,  "y": -radius*h+yp},
      { "x": radius/2+xp, "y": -radius*h+yp}
    ];


var drawHexagon = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; });


var svgContainer =
    d3.select("body")
      .append("svg")
      .attr("width", 800)
      .attr("height", 800);

var enterElements =
    svgContainer.append("path")
                .attr("d", drawHexagon(hexagonData))
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .attr("fill", "rgba(192, 179, 160, 0.4)");
