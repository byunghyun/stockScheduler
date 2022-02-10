import React, { useEffect } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SendIcon from '@mui/icons-material/Send';
import router, { useRouter} from 'next/router';

const LeftNaviBar = () => {
  const route = useRouter();
  return (
    <ul className='mt-3 text-[12px]'>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
          <button onClick={() => {router.push('/')}}>
              <DashboardIcon />
              <p className='text-[11px] mt-1'>대시보드</p>
          </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/schedule' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
          <button onClick={() => {router.push('/schedule')}}>
              <EventNoteIcon />
              <p className='text-[11px] mt-1'>일정 관리</p>
          </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/sharingWork' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
        <button onClick={() => {router.push('/sharingWork')}}>
            <SendIcon />
            <p className='text-[11px] mt-1'>업무 공유</p>
        </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/addProduct' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
        <button onClick={() => {router.push('/addProduct')}}>
            <AddBoxIcon />
            <p className='text-[11px] mt-1'>상품 추가</p>
        </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/productManager' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
        <button onClick={() => {router.push('/productManager')}}>
          <InboxIcon />
          <p className='text-[11px] mt-1'>상품 관리</p>
        </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/stockHistory' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
        <button onClick={() => {router.push('/stockHistory')}}>
          <ListAltIcon />
          <p className='text-[11px] mt-1'>변경 내역</p>
        </button>
      </li>
      <li className={`flex flex-col justify-center items-center mx-2 my-3 px-1 py-3 rounded-2xl hover:cursor-pointer ` +
            (route.pathname === '/settings' ? 'text-white bg-[#111827]' : 'text-[#7f8693]')
        }
      >
        <button onClick={() => {router.push('/settings')}}>
          <SettingsApplicationsIcon />
          <p className='text-[11px] mt-1'>설정 관리</p>
        </button> 
      </li>
    </ul>
  )
}

export default LeftNaviBar
