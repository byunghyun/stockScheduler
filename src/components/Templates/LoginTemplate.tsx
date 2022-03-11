import Router from 'next/router'
import React from 'react'
import TopLabelAndInput from '../Atoms/input/TopLabelAndInput'

const Login = () => {
    const handleClickEvent = {
        login: (event: any) => {
            event.preventDefault();
            Router.push('/');
        },
    }
  return (
    <div className='body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0'>
      <header className="max-w-lg mx-auto">
          <a href="#">
              <h1 className="text-4xl font-bold text-white text-center">가장 쉬운 재고관리 Credia</h1>
          </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
              <h3 className="font-bold text-2xl">로그인 하기</h3>
              <p className="text-gray-600 pt-2">아이디와 비밀번호를 입력하세요.</p>
          </section>

          <section className="mt-10">
              <form className="flex flex-col" method="POST" action="#">
                  <TopLabelAndInput type='text' label='Email' />
                  <TopLabelAndInput type='password' label='Password' />
                  <div className="flex justify-end mb-6">
                      <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline ">비밀번호 찾기</a>
                  </div>
                  <button onClick={handleClickEvent.login} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">로그인</button>
              </form>
          </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6 text-[16px]">
          <p className="text-white">아직 회원이 아니신가요? <a href="#" className="font-bold text-[#fdf039] hover:underline pl-2">회원 가입</a></p>
      </div>
</div>
  )
}

export default Login