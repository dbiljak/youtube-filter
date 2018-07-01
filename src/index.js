import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDbnrc_zGlRB0CWboo3TgYJziERQRpCGu4';

// Create new component, This component should produce HTML
// const -> replaces var, this is unchangeable var in ES6
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('php')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // Longer version
      // this.setState({ videos: videos });
      // Shorter version
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }



  render() {
    // Debounce limit calls to function in custom intervall (example: 300ms)
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="row">
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }

};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
