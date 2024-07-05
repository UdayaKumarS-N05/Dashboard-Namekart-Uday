export async function search(artist, accessToken) {
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
      return data.items;
    });

  return fetchedAlbums;
}
