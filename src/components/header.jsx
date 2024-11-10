import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { LinkIcon, LogOut, Github } from 'lucide-react';
import { UrlState } from '@/context';
import useFetch from '@/hooks/use-fetch';
import { logout } from '@/db/apiAuth';
import { BarLoader } from 'react-spinners';

const Header = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = UrlState();
  const { loading, fn: fnLogout } = useFetch(logout);

  const handleLogout = async () => {
    await fnLogout();
    fetchUser();
    navigate("/auth");
  };

  return (
    <>
      <nav className="py-4 px-6 sm:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-14 sm:h-16 md:h-20 ml-6 sm:ml-12" alt="CutURL Logo" />
        </Link>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/keshavgarg24/CutURL" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-red-800 dark:text-white" />
          </a>

          {!user ? (
            <Button onClick={() => navigate("/auth")} className="px-6 py-2 text-sm sm:text-base">
              Login
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>{user?.user_metadata?.name || "User"}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-blue-400 flex items-center space-x-2">
                  <Link to="/dashboard" className="flex">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    <span>My Links</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>

      {loading && <BarLoader className="mt-2 mx-auto" width="80%" color="#E40046" />}
    </>
  );
};

export default Header;
