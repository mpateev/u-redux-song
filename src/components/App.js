import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

export default () => {
  return (
    <div className="ui segment">
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
