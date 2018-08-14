import React from 'react'
import HeaderContainer from '../components/HeaderContainer.js'
import ChartContainer from '../components/ChartContainer.js'

class BestSongsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      songs: []
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(responseText => responseText.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
  };

  render(){
    return(
      <React.Fragment>
        <HeaderContainer />
        <ChartContainer songs = {this.state.songs}/>
      </React.Fragment>
    )
  }
}

export default BestSongsContainer;
