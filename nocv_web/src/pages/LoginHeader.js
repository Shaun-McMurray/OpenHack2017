import React, {Component} from 'react';
import { Image, PageHeader } from 'react-bootstrap';

export const LoginHeader = () => {
  return(
    <div className="container">
      <PageHeader style={{borderBottomWidth: 0}}>
        <Image src="./images/logo.gif" rounded/>
      </PageHeader>
    </div>
  );
}
