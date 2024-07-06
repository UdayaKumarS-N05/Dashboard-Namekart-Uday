import { getToken } from "./apiCredentials";
import { useEffect, useState } from "react";

import Albums from "./Albums";
import BarGraph from "./BarGraph";

function App() {
  const [accessToken, setAccessToken] = useState();
  const [artist, setArtist] = useState("");
  const [albums, setAlbums] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [compare, setCompare] = useState([]);
  // const [tracks, setTracks] = useState([]);
  // const svgRef = useRef();
  useEffect(function () {
    const res = getToken();
    res.then((data) => {
      setAccessToken(data.access_token);
    });
  }, []);

  async function search() {
    console.log("searching for " + artist);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        return data.artists.items[0]?.id;
      });
    console.log(artistID);

    const fetchedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?limit=50`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  console.log("compare", compare);

  return (
    <>
      <div className="grid place-items-center">
        <div className=" text-yellow-800 flex gap-1 justify-around w-3/4 items-center h-10">
          <input
            className="w-full border border-1 border-slate-950 h-8 rounded-md p-2 text-slate-950"
            type="text"
            value={artist}
            onKeyDown={(e) => e.key === "Enter" && search()}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Enter your favorite artist."
          />
          <div className="flex gap-2">
            <button
              onClick={() => search()}
              className="w-16 h-8 bg-blue-500 text-slate-200 rounded-md"
            >
              Click
            </button>
            {compare.length > 1 && (
              <button
                className="w-max h-8 bg-blue-500 text-slate-200 px-4 rounded-md"
                onClick={() => setShowCompare((s) => !s)}
              >
                Compare
              </button>
            )}
          </div>
          <div id="myChart"></div>
        </div>
        {showCompare && (
          <>
            <BarGraph compare={compare}></BarGraph>
          </>
        )}

        <div className="mr-8">
          <Albums
            albums={albums}
            accessToken={accessToken}
            setCompare={setCompare}
          />
        </div>
      </div>
    </>
  );
}

export default App;
