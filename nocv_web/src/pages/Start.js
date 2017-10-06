import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export const Start = () => {
  return (
    <div>
      <div>
        <img src='Path to img' alt="logo" />
      </div>
      <div>
        <Button className = "btn btn-primary btn-lg">Hire</Button>
        <Button className="btn-lg">Apply</Button>

          <div>
              <style type="text/css">{'.btn-custom { background-color: "#f4f4f4"; color: white; }'}</style>
              <Button bsStyle="custom">Custom</Button>
            </div>

      </div>
    </div>
  );
}
