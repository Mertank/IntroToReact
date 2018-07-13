import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            videos: [] 
        };

        YTSearch({ key: process.env.YOUTUBE_KEY, term: 'Aaron Ross' }, (videos) => { 
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));