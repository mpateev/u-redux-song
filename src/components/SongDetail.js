import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return (
    <div>
      <h2>{song && "Song Detail"}</h2>
      <h3>{song && "Song Title: " + song.title}</h3>
      <h4>{song && "Duration: " + song.duration}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
