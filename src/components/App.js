import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// import youtubeClient from "../apis/httpClient";
import videoList from "../videoList";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    // this.onTermSubmit("vespa");

    this.setState({
      videos: videoList,
      selectedVideo: videoList[videoList.length - 1],
    });
  }

  onTermSubmit = async (term) => {
    /* const result = await youtubeClient.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(result);
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0],
    }); */
  };

  onVideoSelect = (video) => {
    console.log("App->", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar> */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
