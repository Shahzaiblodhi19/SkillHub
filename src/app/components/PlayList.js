import { useState } from 'react';
import Image from 'next/image';
import CourseImage from '../assets/course.jpg';
import CourseImage2 from '../assets/course2.webp';

export default function Playlist({ PlayListModal }) {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: "Think & Grow Rich (The secrets of 40 millionaires revealed)",
      author: 'Napoleon Hill',
      language: 'English',
      progress: 80,
      lastActivity: 'Yesterday',
      image: CourseImage,
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'Blake Masters',
      language: 'English',
      progress: 50,
      lastActivity: '2 days ago',
      image: CourseImage2,
    },
    {
      id: 3,
      title: 'The 5 AM Club',
      author: 'Robin Sharma',
      language: 'English',
      progress: 30,
      lastActivity: 'Last week',
      image: CourseImage2,
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((item) => item.id !== id));
    setActiveMenu(null);
  };

  return (
    PlayListModal &&
    <div className={`transition-transform transform absolute w-100 h-screen  ${PlayListModal ? 'translate-x-0' : '-translate-x-full'
      }`} style={{zIndex: '1000',height: 'calc(100vh - 62px)',
        backdropFilter: 'blur(10px)', // For background blur
        WebkitBackdropFilter: 'blur(15px)', // Safari support
        backgroundColor: 'rgba(0, 0, 0, 0.2)',}}>
      <div className=" rounded-md p-3 border-1 w-96 bg-white playlist" style={{ overflowY: 'auto',height: 'calc(100vh - 62px)' ,zIndex: '1000' }}>
        {/* Current Playing Section */}
        {playlist.length > 0 ? (
          <div className="mb-3 px-3 pt-3 pb-5" style={{ background: '#F2F3F7' }}>
            <div style={{ width: '100px', height: '130px', overflow: 'hidden' }}>
              <Image
                src={playlist[0].image}
                alt={'course image'}
                className="rounded-md w-100 h-100"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            <h3 className="text-lg font-semibold mt-3 mb-1">{playlist[0].title}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              {playlist[0].author} • {playlist[0].language}
            </p>

            <p className="mt-4 mb-3" style={{ fontSize: '13px' }}>
              {`Progress `}
              <span style={{ fontWeight: 'bold' }}>{playlist[0].progress}%</span>
              {` • Last Activity: `}
              <span style={{ fontWeight: 'bold' }}>{playlist[0].lastActivity}</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 ">
              <div
                className="h-1 rounded-full"
                style={{ width: `${playlist[0].progress}%`, background: '#02C5AF' }}
              ></div>
            </div>
            <button className="mt-4 w-full bg-white text-dark py-2 rounded-md">
              Continue
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 mb-5">No items currently playing.</p>
        )}

        {/* Playlist Section */}
        <div className="flex justify-between items-center mb-3 mt-5">
          <h4 className="text-sm font-semibold">PLAYLIST</h4>
          <button
            onClick={() => setPlaylist([])}
            className="text-sm text-grey-500 hover:underline"
          >
            Clear all
          </button>
        </div>
        <hr className='w-100 h-1 bg-grey-500 mb-4' />
        <ul className="space-y-4">
          {playlist.map((item, index) => (
            <li key={item.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: index === 0 ? '#009ECB' : 'inherit' }}
                  >
                    {item.title.slice(0, 19)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.author} • {item.language}
                  </p>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleMenuToggle(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  •••
                </button>
                {activeMenu === item.id && (
                  <div className="absolute right-0 bg-white border rounded-md text-sm shadow-md w-56 py-2 mt-2 z-10">
                    <button
                      className="w-full text-left flex items-center justify-between pl-4 pr-4  py-2 hover:bg-gray-100 mb-1"
                    >
                      Go to Player Page <svg viewBox="0 0 25 40" width={12} height={12}><path d="M0.494387 4.20556C0.221231 4.47872 0.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path></svg>
                    </button>
                    <button
                      onClick={() => removeFromPlaylist(item.id)}
                      className="w-full text-left flex items-center justify-between pl-4 pr-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Remove from playlist <svg fill="none" viewBox="0 0 20 20" width={12} height={12}>
                        <path fill="red" d="M8.33337 3.25C8.31127 3.25 8.29008 3.25878 8.27445 3.27441C8.25882 3.29004 8.25004 3.31123 8.25004 3.33333V5.08333H11.75V3.33333C11.75 3.31123 11.7413 3.29004 11.7256 3.27441C11.71 3.25878 11.6888 3.25 11.6667 3.25H8.33337ZM13.25 5.08333V3.33333C13.25 2.91341 13.0832 2.51068 12.7863 2.21375C12.4894 1.91681 12.0866 1.75 11.6667 1.75H8.33337C7.91345 1.75 7.51072 1.91681 7.21379 2.21375C6.91686 2.51068 6.75004 2.91341 6.75004 3.33333V5.08333H4.17548C4.1702 5.08328 4.16491 5.08328 4.15961 5.08333H3.33337C2.91916 5.08333 2.58337 5.41912 2.58337 5.83333C2.58337 6.24755 2.91916 6.58333 3.33337 6.58333H3.47661L4.25028 15.8674C4.25913 16.496 4.51269 17.097 4.95787 17.5422C5.41108 17.9954 6.02577 18.25 6.66671 18.25H13.3334C13.9743 18.25 14.589 17.9954 15.0422 17.5422C15.4874 17.097 15.7409 16.496 15.7498 15.8674L16.5235 6.58333H16.6667C17.0809 6.58333 17.4167 6.24755 17.4167 5.83333C17.4167 5.41912 17.0809 5.08333 16.6667 5.08333H15.8405C15.8352 5.08328 15.8299 5.08328 15.8246 5.08333H13.25ZM4.98181 6.58333L5.74745 15.771C5.74918 15.7918 5.75004 15.8125 5.75004 15.8333C5.75004 16.0764 5.84662 16.3096 6.01853 16.4815C6.19043 16.6534 6.42359 16.75 6.66671 16.75H13.3334C13.5765 16.75 13.8096 16.6534 13.9816 16.4815C14.1535 16.3096 14.25 16.0764 14.25 15.8333C14.25 15.8125 14.2509 15.7918 14.2526 15.771L15.0183 6.58333H4.98181ZM8.33337 8.41667C8.74759 8.41667 9.08337 8.75245 9.08337 9.16667V14.1667C9.08337 14.5809 8.74759 14.9167 8.33337 14.9167C7.91916 14.9167 7.58337 14.5809 7.58337 14.1667V9.16667C7.58337 8.75245 7.91916 8.41667 8.33337 8.41667ZM11.6667 8.41667C12.0809 8.41667 12.4167 8.75245 12.4167 9.16667V14.1667C12.4167 14.5809 12.0809 14.9167 11.6667 14.9167C11.2525 14.9167 10.9167 14.5809 10.9167 14.1667V9.16667C10.9167 8.75245 11.2525 8.41667 11.6667 8.41667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        {playlist.length === 0 && <p className="text-center text-gray-500">Playlist is empty.</p>}
      </div>
    </div>
  );
}
