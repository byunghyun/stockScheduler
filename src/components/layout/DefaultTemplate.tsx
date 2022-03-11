import { useRouter } from 'next/router';
import React, { Children, ReactNode, useEffect } from 'react'
import LeftNaviBar from '../Molecules/menu/leftNaviBar/LeftNaviBar'
import HeaderSearch from '../Atoms/search/HeaderSearch'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

type LayoutProps = {
  children: ReactNode;
};

const DefaultTemplate = ({ children }: LayoutProps ) => {
  const router = useRouter();
  const handleClickEvent = {
    logOut: (event: any) => {
        router.push('/login');
    }
  };
  return (
    <div className="flex w-full h-full">
      <div className="fixed z-50 w-[75px] h-full bg-[#1f2937]">
          <div className='flex justify-center items-center bg-[#6366f1] h-[60px] hover:cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17.009">
                  <g transform="translate(-264.25 -427.69)">
                      <path className="fill-[#fff]" d="M270.25,427.7l-6,5.625V444.7h11.375l5.625-6h-11Z"/>
                      <path className="fill-[#fff]" d="M275.4,433.189l5.849,5.5v-11Z"/>
                  </g>
              </svg>
          </div>
          <div className='flex flex-col justify-between overflow-auto h-[calc(100%-75px)]'>
              <LeftNaviBar />
              <button onClick={handleClickEvent.logOut} className='flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer'>
                <LogoutRoundedIcon sx={{ color: '#7f8693' }} />
                <p className='text-[11px] mt-1 text-[#7f8693]'>로그아웃</p>
              </button>
          </div>
      </div>
      <div className='relative flex flex-col w-full min-h-[100vh] bg-[#f3f4f6]'>
          <HeaderSearch />
          <section className={`h-full ml-[75px] mt-[60px] ` + (router.pathname !== `/sharingWork2` && 'p-5')}>
              {children}
          </section>
      </div>
  </div>
  )
}

export default DefaultTemplate
