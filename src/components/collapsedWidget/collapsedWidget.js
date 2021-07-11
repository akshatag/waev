import React from 'react';
import StarRating from '../starRating/starRating'
import Button from '@material-ui/core/Button'
import './styles.css'

class CollapsedWidget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='widget-container'>
        <Button variant="contained" color="primary" onClick={this.props.onClick}>
          <StarRating rating={4} className='widget-star-rating'/>
          (1787 Reviews)
        </Button>
      </div>
    )
  }
}


export default CollapsedWidget;