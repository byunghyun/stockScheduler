import Router from 'next/router';
import React, { useState } from 'react';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import TopLabelAndInput from '../Atoms/input/TopLabelAndInput';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import StylingMeterialInput from '../Atoms/input/StylingMeterialInput';
import { runSupabase } from '../../service/initializeSuapbase';


const Login = () => {
  const [isShownSignUp, setShowSignUp] = useState(false);
  const [test, setTest] = useState(false);
  
  const handleClickEvent = {
    login: (event: any) => {
      event.preventDefault();
      Router.push('/');
    },
    waitPopup: () => {
      alert('준비 중');
    },
    toggleSignUp: (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setShowSignUp((isShownSignUp) => !isShownSignUp);
    },
  };
  return (
      <div className='flex justify-center items-center body-bg min-h-screen'>
        <div className={'w-full ' + (isShownSignUp && 'flex justify-center')}>
          {!isShownSignUp && 
            <header className='max-w-lg mx-auto'>
              <h1 className='text-4xl font-bold text-white text-center'>
                가장 쉬운 재고관리 CREDIA
              </h1>
            </header>
          }
          <motion.main
            layout
            data-isShownSignUp={isShownSignUp}
            transition={{ duration: .3 }}
            className={'shadow-2xl signupPopup rounded-lg'}>
              {
                isShownSignUp ? (
                  <motion.div layout className='flex flex-col h-full'>
                    <div className='pb-4'>
                      <button className='mt-4 ml-4' onClick={handleClickEvent.toggleSignUp}>
                        <ArrowBackIcon />
                      </button>
                    </div>
                    <div className='flex-1 p-8 overflow-y-auto'>
                      <StylingMeterialInput
                        id='standard-basic'
                        label='바코드 번호'
                        variant='standard'
                        className='w-full'
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        sx={{
                          marginTop: '0',
                        }}
                      />
                      <StylingMeterialInput
                        id='standard-basic'
                        label='바코드 번호'
                        variant='standard'
                        className='w-full'
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        sx={{
                          marginTop: '30px',
                        }}
                      />
                      <button onClick={async (event) => {
                        event.preventDefault();
                        try {
                        const { user, session, error } = await runSupabase.auth.signUp(
                          {
                            email: 'eer3481@naver.com',
                            password: 'test1234',
                          },
                          {
                            data: {
                              first_name: 'John', 
                              age: 27,
                            }
                          }
                        );
                        if(error) throw error;
                        console.log('user', user)
                        } catch(error) {
                          console.log('error', error);
                        } finally {
                          console.log('finally', 'finally')
                        }

                      }}>회원가입</button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div layout>
                    <section>
                      <h3 className='font-bold text-2xl'>로그인 하기</h3>
                      <p className='text-gray-600 pt-2'>아이디와 비밀번호를 입력하세요.</p>
                    </section>
        
                    <section className='mt-10'>
                      <form className='flex flex-col' method='POST' action='#'>
                        <TopLabelAndInput type='text' label='Email' />
                        <TopLabelAndInput type='password' label='Password' />
                        <button
                          onClick={handleClickEvent.login}
                          className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded shadow-lg hover:shadow-xl transition duration-200 mt-8'
                        >
                          로그인
                        </button>
                        <button
                          onClick={handleClickEvent.toggleSignUp}
                          className='mt-4 bg-white border border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-4 rounded shadow-lg hover:shadow-xl transition duration-200'
                        >
                          아직 회원이 아니신가요?
                        </button>
                      </form>
                    </section>
                  </motion.div>
                  )
                }
          </motion.main>
          {!isShownSignUp && 
            <div className='max-w-lg mx-auto text-center mt-12 mb-6 text-[16px]'>
              <p className='text-white'>
                비밀번호를 잊어버리셨나요?
                <button className='text-[18px] text-[#fdf039] hover:underline pl-2' onClick={handleClickEvent.waitPopup}>
                  비밀 번호 찾기
                </button>
              </p>
            </div >
          }
        </div>
      </div>
  );
};

export default Login;
