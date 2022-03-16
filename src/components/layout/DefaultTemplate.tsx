import { useRouter } from 'next/router';
import React, { Children, ReactNode, useEffect } from 'react'
import HeaderSearch from '../Atoms/search/HeaderSearch'
import LeftMenu from '../Organisms/LeftMenu'


type LayoutProps = {
  children: ReactNode;
};

const DefaultTemplate = ({ children }: LayoutProps ) => {
  const router = useRouter();
  return (
    <div className={'flex w-full ' + (router.pathname !== `/` ? 'h-[100vh]' : 'h-full')}>
      <LeftMenu />
      <div className='relative flex flex-col w-full flex-1 bg-[#f3f4f6]'>
          <HeaderSearch />
          <section className={`flex flex-col flex-1 ml-[75px] mt-[60px] overflow-hidden ` + (router.pathname !== `/sharingWork2` && 'p-5')}>
              {children}
          </section>
      </div>
  </div>
  )
}

export default DefaultTemplate
