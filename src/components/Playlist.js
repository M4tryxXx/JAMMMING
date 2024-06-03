import React, { useState, useEffect } from "react";

function Playlists(props) {
  const [playlists, setPlaylists] = useState(props.getPlaylists);
  //console.log(playlists[0]);
  // const[playlistInfo, setPlaylistInfo] = useState(<p>Please select a playlist!</p>)
  let playlistInfo = <p>Please select a playlist <br/> or <br/>Create a new playlist</p>;
  if (props.activePlaylist.name !== "") {
    playlistInfo = (
      <div>
        <p>
          Selected Playlist: <br />
          {props.activePlaylist.name}
        </p>
        <p>Change playlist name!</p>
        <input
          type="text"
          id="changeName"
          className="textInput"
          onChange={props.handleNameChange}
        />
        <button
          id="submitName"
          name="submitName"
          onClick={props.handlePlaylistName}
        >
          Change Name
        </button>
      </div>
    );
  }

  // if(props.activePlaylist.name !== '') {
  //     setPlaylistInfo(
  //         <div>
  //         <p>Selected Playlist: <br/>{props.activePlaylist.name}</p>
  //         <p>Change playlist name!</p>
  //         <input type='text' id='changeName' style={{width: "90%"}} />
  //         <button id='submitName' name='submitName'>Change Name</button>
  //         </div>
  //     )
  // }
  let playlistArr = [];
  for (let i = 0; i < playlists.length; i++) {
    let image;
    if(playlists[i].images !== null) {
      image = playlists[i].images[0].url;
    } else {
      image='./images/no-image.jpg'
    }
    playlistArr.push(
      <div
        className="playlistContainer"
        style={{ display: "flex", padding: "15px" }}
        key={300 + i}
      >
        <img
          id={playlists[i].id}
          className={playlists[i].snapshot_id}
          onClick={props.handleClick}
          name={playlists[i].name}
          style={{ width: "64px", height: "64px", borderRadius: "8spx" }}
          kei={i}
          src={image}
          alt="Playlist"
          key={400 + i}
        />
        <p className="playlistName" key={playlists[i].id}>
          {playlists[i].name}
        </p>
      </div>
    );
  }
  return (
    <div className="playlistDiv">
      <h2>{playlists[0].owner.display_name} Playlists</h2>
      <div>{playlistArr}</div>
      {playlistInfo}
      <div className="newPlaylistContainer">
        <h4>Create a playlist</h4>
        <input type='text' id='newPlaylistName' onChange={props.handleChange} className="textInput" placeholder="New playlist name .."/>
        <br/>
        <button className="createBtn" id='createPlaylist' onClick={props.handleCreatePlaylist}>Create</button>
      </div>
    </div>
  );
}

export default Playlists;
