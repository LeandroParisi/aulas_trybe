import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props
    
    return (
      <div className='pokemon-box'>
        <div className='pokemon-box-left'>
          <span>{name}</span>
          <span>{type}</span>
          <span>{`Average weight: ${averageWeight.value}`}</span>
        </div>
        <div className='pokemon-box-right'>
          <img src={image}/>
        </div>
      </div>
    );
  }
} 

// https://www.youtube.com/watch?v=gImL0szqlr8

export default Pokemon;