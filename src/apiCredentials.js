const CLIENT_ID = "your client id";
const CLIENT_SECRET = "Your secret id";

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
