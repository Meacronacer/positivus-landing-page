import { useState } from 'react';
import { Button } from '../ui/button';
import Modal from './modal';
import LogoIcon from '../../assets/logo.svg';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between px-[100px] dekstop:px-[40px] mobile:px-[20px]">
      <a href="#">
        <LogoIcon className="h-[36px] w-[220px] text-black laptop:max-w-[120px]" />
      </a>
      <div className="flex items-center gap-x-[40px] dekstop:gap-x-[18px]">
        <nav className="text-[20px] leading-[140%] laptop:text-[16px] tablet:hidden">
          <ul className="flex items-center gap-x-[40px] dekstop:gap-x-[14px]">
            <li className="group cursor-pointer items-center py-2">
              <a href="#">About us</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a href="#">Services</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a href="#">Use Cases</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a href="#">Pricing</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a href="#">Blog</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
          </ul>
        </nav>
        <Button
          aria-label="request a quote"
          variant="white"
          className="dekstop:h-[40px] dekstop:px-2 dekstop:py-1 dekstop:text-[16px] tablet:hidden"
        >
          Request a quote
        </Button>
        <button
          type="button"
          aria-label="open popup menu"
          onClick={() => setShowModal(true)}
          className="hidden rounded-md p-2 active:bg-green tablet:block"
        >
          <img src="mobile-header-btn.svg" alt="mobile-menu" />
        </button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <nav className="relative flex h-screen items-center justify-center text-center text-[30px]">
          <ul className="flex flex-col gap-y-5">
            <li className="cursor-pointer items-center py-2">
              <a href="#">About us</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a href="#">Services</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a href="#">Use Cases</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a href="#">Pricing</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </Modal>
    </header>
  );
};

export default Header;
