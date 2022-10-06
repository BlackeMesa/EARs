
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



  export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-core.p.rapidapi.com/v1",
      prepareHeaders: (headers) => {
        headers.set("X-RapidAPI-Key", "097a0c7e40mshb4046a8718cf8cdp1d21e1jsn3f44a025865e");
      
    return headers;
    }
    }),
    endpoints: (builder) => ({

      getTopCharts: builder.query({query: () =>  '/charts/world'}),
  
    }),
  });
    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;