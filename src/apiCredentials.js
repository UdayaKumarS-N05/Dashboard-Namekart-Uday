const CLIENT_ID = "1bffa80591124967aa9a48c6ea84cf36";
const CLIENT_SECRET = "49bd5fff2fb24999bc1dcc1758a484b7";

export async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return await response.json();
}
