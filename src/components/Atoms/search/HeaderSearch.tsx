import React from 'react';

const HeaderSearch = () => {
  return (
    <div className='fixed z-30 bg-white w-full h-[60px] pl-[75px] shadow-sm'>
      <input
        type='text'
        className='w-full h-full pl-5'
        placeholder='검색할 내용을 입력해주세요.'
      />
    </div>
  );
};

export default HeaderSearch;
