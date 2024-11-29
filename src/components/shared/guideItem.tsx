import { useState } from 'react';

interface props {
  title: string;
  index: number;
}

const GuideItem: React.FC<props> = ({ title, index }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`${open ? 'bg-green' : 'bg-grey'} rounded-[45px] px-[60px] py-[41px] shadow-[rgba(0,0,15,1)_0px_5px_0px_0px] transition-all tablet:p-[30px]`}
    >
      <div className="ml-1 flex items-center justify-between gap-x-3">
        <div className="flex items-center gap-x-[25px] font-medium">
          <span className="text-[60px] tablet:text-[30px]">0{index + 1}</span>
          <span className="mobile:max-w-[200px] text-[30px] tablet:text-[18px]">
            {title}
          </span>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="bg-grey hover:bg-green relative flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-[50%] border-[1px] duration-500"
        >
          <img src="minus.svg" alt="open" />
          <img
            src="minus.svg"
            alt="open"
            className={`absolute transition-all duration-300 ${open ? 'rotate-0' : 'rotate-90'}`}
          />
        </div>
      </div>
      <div
        className={`overflow-y-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}
      >
        <hr className="mb-[30px] mt-[20px]" />
        <p className="pb-[15px] leading-[120%]">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </p>
      </div>
    </div>
  );
};

export default GuideItem;
