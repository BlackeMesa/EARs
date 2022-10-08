


import {ArtistCard, Loader, Error } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
 

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold mt-4 text-3xl text-white text-left mb-10">Top Artists</h2>

      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track}  />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
