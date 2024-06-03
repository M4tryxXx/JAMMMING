import React, { useState, useEffect } from "react";

let artistsArray = [];

export default function NowPlaying(props) {
  let artists = [];

  artistsArray = props.active.item.artists;
  const [playing, setPlaying] = useState(props.active.item);

  let isTrue = props.active.is_playing;

  useEffect(() => {
    setPlaying(props.active.item);
  }, [props.active.item.name]);

  if (isTrue) {
    for (let j = 0; j < artistsArray.length; j++) {
      artists.push(artistsArray[j].name);
      //console.log(playing.artists[j].name);
    }

    <div className="trackContainer">
      <div className="albumImgDiv">
        <img
          className="albumImg"
          src={playing.album.images[1].url}
          alt={"Image of " + playing.name}
        />
      </div>
      <p className="track" id={playing.id}>
        <strong>{playing.name}</strong> - {artists.join(" & ")} <br />{" "}
        <span className="albumTitle">
          <strong>{playing.album.name}</strong>
        </span>
      </p>
    </div>;

    return (
      <div className="nowPlaying">
        <div className="nowContainer">
          <h3>Now Playing . . .</h3>
          <div className="albumImgDiv">
            <img
              style={{ height: "180px", width: "180px" }}
              className="albumImg"
              src={playing.album.images[1].url}
              alt={"Image of " + playing.name}
            />
          </div>
          <h2 className="track" id={playing.id}>
            <strong style={{ color: "lime" }}>{playing.name}</strong> <br />{" "}
            <span className="albumTitle">
              {artists.join(" & ")} - <strong>{playing.album.name}</strong>
            </span>
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nowPlaying">
        <h2 className="albumTitle">Nothing playing ...</h2>
      </div>
    );
  }
}
