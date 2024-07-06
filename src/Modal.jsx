function Modal({ tracks, setCompare }) {
  return (
    <>
      <button
        className="w-full h-8 bg-blue-500 text-slate-200 px-4 rounded-md mt-2"
        onClick={(e) => {
          e.preventDefault();

          setCompare((compare) => [
            ...compare,
            {
              name: tracks.name,
              popularity: tracks.popularity,
              total_tracks: tracks.total_tracks,
            },
          ]);
        }}
      >
        Add to compare list.
      </button>
    </>
  );
}

export default Modal;
