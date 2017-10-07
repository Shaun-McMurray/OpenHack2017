import React, {Component} from 'react'
import { Image, Jumbotron, PageHeader, Media } from 'react-bootstrap'

import '../styles/Stylesheet.css'

export const Header = () => {
  return(
    <div className="container">
      <PageHeader style={{borderBottomWidth: 0}}>
          <Media>
            <Media.Left align="top">
              <Image src="./images/logo.gif" rounded/>
            </Media.Left>
          </Media>
      </PageHeader>
    </div>
  );
}
