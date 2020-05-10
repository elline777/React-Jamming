import React, { Component } from 'react';

class Track extends Component {
  renderAction = () => {
    return (
      <button className='Track-action'>
        {this.props.isRemoval ? '-' : '+'}
      </button>
    );
  };

  render() {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3></h3>
          <p> | </p>
        </div>
        <button className='Track-action'>{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
