import AlbumItem from "./AlbumItem";

function Albums({ albums, accessToken, setCompare }) {
  console.log("albums data in Albums", albums);
  return (
    <ul className="flex flex-wrap gap-4 ml-28 mt-4">
      {albums?.map((album, i) => {
        return (
          // <li key={album.id} className="border border-2 border-slate-500">
          //   <img src={album.images[0].url} alt="" className="w-14 h-14" />
          //   <a href={album.href}>Song link</a>
          // </li>
          <AlbumItem
            album={album}
            key={album.id}
            accessToken={accessToken}
            setCompare={setCompare}
          ></AlbumItem>
        );
      })}
    </ul>
  );
}
export default Albums;
