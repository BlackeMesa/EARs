

import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const  TopCharts = () => {
 
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
 

  if (isFetching ) return <Loader title="Loading top charts" />;
  if (error ) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold mt-4 text-3xl text-white text-left mb-10">
        Discover Top Charts 
      </h2>

      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts ;
