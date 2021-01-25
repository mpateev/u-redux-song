import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  // receive 'songs' Redux state in 'props' object
  const listOfSongs = songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button small primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">
          <h3>
            {song.title}{" "}
            {/* <span className="right floated content">{song.duration}</span> */}
          </h3>
        </div>
      </div>
    );
  });
  return (
    <div className="ui divided list">
      <h1>SongList</h1>
      {listOfSongs}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  // mapping of the 'songs' piece of Redux state to SongList's props
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
