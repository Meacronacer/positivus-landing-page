import { useState } from 'react';
import { Button } from '../ui/button';
import Modal from './modal';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between">
      <a>
        <img
          src="logo.svg"
          alt="positivus"
          className="h-[36px] w-[220px] laptop:max-w-[120px]"
          loading="lazy"
        />
      </a>
      <div className="dekstop:gap-x-[18px] flex items-center gap-x-[40px]">
        <nav className="text-[20px] leading-[140%] laptop:text-[16px] tablet:hidden">
          <ul className="dekstop:gap-x-[14px] flex items-center gap-x-[40px]">
            <li className="group cursor-pointer items-center py-2">
              <a>About us</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a>Services</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a>Use Cases</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a>Pricing</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
            <li className="group cursor-pointer items-center py-2">
              <a>Blog</a>
              <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
            </li>
          </ul>
        </nav>
        <Button
          variant="white"
          className="dekstop:px-2 dekstop:h-[40px] dekstop:py-1 dekstop:text-[16px] tablet:hidden"
        >
          Request a quote
        </Button>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="active:bg-green hidden rounded-md p-2 tablet:block"
        >
          <img src="mobile-header-btn.svg" alt="mobile-menu" />
        </button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <nav className="relative flex h-screen items-center justify-center text-center text-[30px]">
          <ul className="flex flex-col gap-y-5">
            <li className="cursor-pointer items-center py-2">
              <a>About us</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a>Services</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a>Use Cases</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a>Pricing</a>
            </li>
            <li className="cursor-pointer items-center py-2">
              <a>Blog</a>
            </li>
          </ul>
        </nav>
      </Modal>
    </header>
  );
};

export default Header;
