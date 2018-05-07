//first react component -> outputs HTLM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC6G-pauWD09NUHYv7YGXc29KvtvTkmA3Y';



class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      videos: [ ],
      selectedVideo: null
    };

    this.videoSearch('goofy');


  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
      //when data and varaible is not identical then use variable:data
  }

  render() {
    return (
      <div>
        <Searchbar onSearchTermChange={ term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
           videos={this.state.videos}
           onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
