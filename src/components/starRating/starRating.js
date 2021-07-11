import React from 'react';
import Star from '@material-ui/icons/Star';

const StarRating = props => {  

  const stars = []
  
  for(let i = 0; i < props.rating; i++) {
    stars.push(<Star style={{color: 'gold'}}/>)
  }

  return stars;

}

export default StarRating;