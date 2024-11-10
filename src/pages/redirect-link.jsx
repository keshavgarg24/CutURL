/* eslint-disable react/prop-types */
import { storeClicks } from "@/db/apiClicks";
import { getLongUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const RedirectLink = () => {
  const { id } = useParams();

  const { loading, data, fn } = useFetch(getLongUrl, id);
  const { loading: loadingStats, fn: fnStats } = useFetch(storeClicks, {
    id: data?.id,
    originalUrl: data?.original_url,
  });

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!loading && data) {
      fnStats();
    }
  }, [loading, data]);

  if (loading || loadingStats) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <BarLoader width={"80%"} color="#f43f5e" />
        <p className="text-lg mt-4 text-red-500">Redirecting...</p>
      </div>
    );
  }

  return null;
};

export default RedirectLink;
