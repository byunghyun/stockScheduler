import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import React, { MouseEventHandler, ReactNode } from 'react';

type LayoutProps = {
  isShown: boolean;
  title: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  rest?: Array<string>;
};

const popupContainerAnimation = {
  hidden: { y: '80vh', scale: 0.7 },
  visible: { y: 0, scale: 1 },
  transition: {
    duration: 0.4,
    type: 'spring',
    damping: 150,
    stiffness: 100,
  },
};

const popupAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const PopupContainer = ({
  isShown,
  title,
  onClose,
  className,
  children,
  ...rest
}: LayoutProps) => (
  <AnimatePresence exitBeforeEnter={true}>
    {isShown && (
      <motion.div
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        variants={popupAnimation}
        className='fixed flex justify-center items-center w-full h-full top-0 left-0 z-[100]'
      >
        <div className='fixed w-full h-full bg-[#00000045] hover:cursor-pointer'>
          &nbsp;
        </div>
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          variants={popupContainerAnimation}
          className={
            'fixed z-[150] bg-white w-1/2 min-h-[300px] ' +
            (className && className)
          }
        >
          <header className='flex flex-row w-full justify-between h-[4.375rem] bg-[#e7e7e7] leading-[4.375rem] px-5'>
            <p className='text-[18px]'>{title}</p>
            <div className='flex justify-center items-center'>
              <button onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
          </header>
          <div className='p-8' {...rest}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PopupContainer;
