/* eslint-disable react/prop-types */
import { Copy, Download, LinkIcon, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";

const LinkCard = ({ url = [], fetchUrls }) => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title; // Desired file name for the downloaded image

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url.id);

  return (
    <div className="flex flex-col md:flex-row gap-4 border border-red-500 p-4 bg-black rounded-lg max-w-full shadow-md">
      <img
        src={url?.qr}
        className="h-32 w-32 object-contain ring ring-red-600 rounded-lg mx-auto md:mx-0"
        alt="QR code"
      />
      <div className="flex flex-col flex-1">
        <Link to={`/link/${url?.id}`} className="text-2xl font-bold text-red-600 hover:underline truncate md:whitespace-nowrap">
          {url?.title}
        </Link>
        <Link
          to={`/link/${url?.id}`}
          className="text-lg text-red-500 font-medium hover:underline truncate"
        >
          https://cut-url.vercel.app/{url?.custom_url || url?.short_url}
        </Link>
        <div className="flex items-center text-blue-400 gap-1 my-2 truncate">
          <LinkIcon lassName="p-1 text-blue" />
          <a href={url?.original_url} className="hover:underline" target="_blank" rel="noopener noreferrer">
            {url?.original_url}
          </a>
        </div>
        <span className="text-gray-500 text-sm">{new Date(url?.created_at).toLocaleString()}</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start gap-2 mt-4 md:mt-0 self-start">
        <Button
          variant="ghost"
          onClick={() =>
            navigator.clipboard.writeText(`https://cut-url.vercel.app/${url?.short_url}`)
          }
        >
          <Copy />
        </Button>
        <Button variant="ghost" onClick={downloadImage}>
          <Download />
        </Button>
        <Button
          variant="ghost"
          onClick={() => fnDelete().then(() => fetchUrls())}
          disabled={loadingDelete}
        >
          {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash color="red" />}
        </Button>
      </div>
    </div>
  );
};

export default LinkCard;
