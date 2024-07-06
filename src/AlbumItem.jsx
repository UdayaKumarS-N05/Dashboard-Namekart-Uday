import { useState } from "react";
import Modal from "./Modal.jsx";

function AlbumItem({ album, accessToken, setCompare }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [tracks, setTracks] = useState([]);
  async function getTracks(albumID, accessToken) {
    console.log("album id:", albumID);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const tracks = await fetch(
      `https://api.spotify.com/v1/albums/${albumID}`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setTracks(data);
      });
  }
  return (
    <>
      <li key={album.id} className="rounded-md bg-slate-500/5 w-64 h-96">
        <div className="">
          <img
            src={album.images[0].url}
            alt=""
            className="w-30 h-30 rounded-md"
          />
          <div className="text-sm">{album.name}</div>
        </div>
        <button
          className="w-full h-8 bg-blue-500 text-slate-200 px-4 rounded-md"
          onClick={() => {
            getTracks(album.id, accessToken);
            setModalOpen((s) => !s);
          }}
        >
          Get details to compare.
        </button>
        <div></div>
        {modalOpen && <Modal tracks={tracks} setCompare={setCompare} />}
      </li>
    </>
  );
}

export default AlbumItem;
