import React from 'react';
import ReactPlayer from 'react-player/youtube';
import StarRating from '../starRating/starRating'
import './styles.css'
import { Fab } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.player = React.createRef();
  }

  render() {

    console.log('rerendering video player component')

    const vidConfig = {
      youtube: {
        playerVars: {
          start: 5,
          end: 10
        }
      }
    }

    return( 
      <div className='video-container'>
        <ReactPlayer 
          config={vidConfig}
          controls={false}
          muted={false} 
          playing={false}
          key={this.props.review.url}
          url={this.props.review.url}
          onStart={this.handleMediaStart}
          ref={this.player}/>
        <StarRating rating={this.props.review.rating} className='star-rating'/>
        <div className='back-arrow-container'>
          <Fab>
            <ArrowBackIcon onClick={this.props.prevVid} color={this.props.disableBackButton ? 'disabled' : 'inherit'}>
            </ArrowBackIcon>
          </Fab>
        </div>
        <div className='forward-arrow-container'>
          <Fab>
            <ArrowForwardIcon onClick={this.props.nextVid} color={this.props.disableForwardButton ? 'disabled' : 'inherit'}>
            </ArrowForwardIcon>
          </Fab>
        </div>
      </div>  
    )
  }

  handleMediaStart = () => {
    this.player.current.getInternalPlayer().playVideo()
  }
}


export default VideoPlayer;