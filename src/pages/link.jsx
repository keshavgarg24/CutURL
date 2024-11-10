/* eslint-disable react/prop-types */
import DeviceStats from "@/components/device-stats";
import Location from "@/components/location-stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UrlState } from "@/context";
import { getClicksForUrl } from "@/db/apiClicks";
import { deleteUrl, getUrl } from "@/db/apiUrls";
import useFetch from "@/hooks/use-fetch";
import { Copy, Download, LinkIcon, Trash } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader, BeatLoader } from "react-spinners";

const LinkPage = () => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title;

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const navigate = useNavigate();
  const { user } = UrlState();
  const { id } = useParams();
  const { loading, data: url, fn, error } = useFetch(getUrl, { id, user_id: user?.id });
  const { loading: loadingStats, data: stats, fn: fnStats } = useFetch(getClicksForUrl, id);
  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, id);

  useEffect(() => {
    fn();
  }, []);

  useEffect(() => {
    if (!error && loading === false) fnStats();
  }, [loading, error]);

  if (error) {
    navigate("/dashboard");
  }

  let link = "";
  if (url) {
    link = url?.custom_url ? url?.custom_url : url.short_url;
  }

  return (
    <>
      {(loading || loadingStats) && (
        <BarLoader className="mb-4 w-full" color="#b91c1c" /> 
      )}
      <div className="flex flex-col gap-8 sm:flex-row justify-between px-4 sm:px-8 py-6">
        <div className="flex flex-col items-start gap-6 p-4 rounded-lg sm:w-2/5 bg-black-900 border border-red-800 shadow-md">
          <span className="text-4xl sm:text-5xl font-extrabold text-red-500 hover:underline cursor-pointer break-words">
            {url?.title}
          </span>
          <a
            href={`https://cuturl.tech/${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl text-red-500 font-bold hover:underline cursor-pointer break-words"
          >
            https://cuturl.tech/{link}
          </a>
          <a
            href={url?.original_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline cursor-pointer text-blue-400 break-all"
          >
            <LinkIcon className="p-1 text-blue-400" />
            {url?.original_url}
          </a>
          <span className="font-light text-sm text-red-400">
            {new Date(url?.created_at).toLocaleString()}
          </span>
          <div className="flex gap-3 mt-2">
            <Button variant="ghost" onClick={() => navigator.clipboard.writeText(`https://cuturl.tech/${link}`)}>
              <Copy className="text-white" />
            </Button>
            <Button variant="ghost" onClick={downloadImage}>
              <Download className="text-white" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => fnDelete().then(() => navigate("/dashboard"))}
              disabled={loadingDelete}
            >
              {loadingDelete ? (
                <BeatLoader size={6} color="#b91c1c" /> 
              ) : (
                <Trash className="text-red-500" />
              )}
            </Button>
          </div>
          <img
            src={url?.qr}
            className="w-full max-w-xs self-center sm:self-start ring ring-red-500 p-2 object-contain"
            alt="QR code"
          />
        </div>

        <Card className="sm:w-3/5 shadow-lg bg-black-800 border border-red-800">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-red-500">Stats</CardTitle>
          </CardHeader>
          {stats && stats.length ? (
            <CardContent className="flex flex-col gap-4 text-red-400">
              <Card className="bg-black-900 border border-red-800 rounded-lg">
                <CardHeader>
                  <CardTitle>Total Clicks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-red-400">{stats?.length}</p>
                </CardContent>
              </Card>
              <CardTitle className="text-red-500">Location Data</CardTitle>
              <Location stats={stats} />
              <CardTitle className="text-red-500">Device Info</CardTitle>
              <DeviceStats stats={stats} />
            </CardContent>
          ) : (
            <CardContent className="text-red-300">
              {loadingStats === false ? "No Statistics yet" : "Loading Statistics..."}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
};

export default LinkPage;
