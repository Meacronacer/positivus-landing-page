// import ForgotPassword from './forgotPassword';

import { Dispatch, SetStateAction } from 'react';

interface Imodal {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Imodal> = ({ setShowModal, showModal, children }) => {
  return (
    <section
      className={`fixed inset-0 z-30 overflow-hidden bg-white transition-all duration-300 ease-in-out ${showModal ? 'translate-y-0' : 'translate-y-full'} `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative h-full w-full overflow-hidden`}
      >
        <button
          onClick={() => setShowModal(false)}
          className="active:bg-green absolute right-1 z-50 rounded-[50%] p-2"
        >
          <img className="h-12 w-12" src="close-modal-btn.svg" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
