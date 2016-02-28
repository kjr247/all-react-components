import React from 'react';

export default class Tooltip extends React.components{

  constructor(){
    super();

    this.state = { isOpen: false }
  }

  render(){

    return (
      <div>'things are working! hooray!'</div>
    )
  }
}
