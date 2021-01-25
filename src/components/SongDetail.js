import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song!</div>;
  }
  return (
    <div>
      <h2>{song && "Song Detail"}</h2>
      <h3>Title</h3>
      <p>{song.title}</p>
      <h3>Duration:</h3>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
