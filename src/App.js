import logo from './logo.svg';
import './App.css';
import React from 'react';
import CollapsedWidget from './components/collapsedWidget/collapsedWidget';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import Modal from '@material-ui/core/Modal';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
      reviews: [
        {url: 'https://www.youtube.com/watch?v=6K6Vp3bn2YM', rating: 4},
        {url: 'https://www.youtube.com/watch?v=A3iQUuQ5r14', rating: 5},
        {url: 'https://www.youtube.com/watch?v=l4M3jC9n75o', rating: 4}
      ],
      activeReviewIndex: 0,
      totalReviews: 3
    }
  }
  
  componentDidMount() {
    console.log('waev loaded')
  }

  render() {
    return (
      <div className="App">
        <CollapsedWidget onClick={this.handleWidgetClick}/>
        <Modal
          open={this.state.expanded}
          onClose={this.handleModalClose}>
            <VideoPlayer
              review={this.state.reviews[this.state.activeReviewIndex]}
              nextVid={this.handleNextVid}  
              prevVid={this.handlePrevVid}
              disableForwardButton={this.state.activeReviewIndex == this.state.totalReviews - 1}
              disableBackButton={this.state.activeReviewIndex == 0}/>
        </Modal>
      </div>
    );
  }

  handleWidgetClick = () => {
    this.setState({
      expanded: true
    })
  }

  handleModalClose = () => {
    console.log('modal close')
    this.setState({
      expanded: false
    })
  }

  handleNextVid = () => {
    console.log('next vid')
    if(this.state.activeReviewIndex < this.state.reviews.length - 1) {
      this.setState({
        activeReviewIndex: this.state.activeReviewIndex + 1
      })
    } 
  }

  handlePrevVid = () => {
    console.log('prev vid')
    if(this.state.activeReviewIndex > 0) {
      this.setState({
        activeReviewIndex: this.state.activeReviewIndex - 1
      })
    } 
  }

}

export default App;
