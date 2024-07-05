// import * as d3 from "d3";
import { getToken } from "./apiCredentials";
import { useEffect, useState } from "react";
import { search } from "./apiSearch";

function App() {
  const [accessToken, setAccessToken] = useState();
  const [artist, setArtist] = useState("");
  const [albums, setAlbums] = useState([]);
  useEffect(function () {
    const res = getToken();
    res.then((data) => {
      setAccessToken(data.access_token);
    });
  }, []);
  console.log(
    "albums",
    // albums.then((data) => console.log(data))
    albums
  );
  return (
    <div className="bg-blue-200 text-yellow-800">
      <input
        className="border border-yellow-500 border-4"
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button
        onClick={() => {
          setAlbums(search(artist, accessToken));
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
