import { RefObject, useState } from 'react';
import useInView from '../../hooks/useVisible';
import { cn } from '../../utils/twMerge';

interface props {
  title: string;
  index: number;
  tranlate: string;
}
const GuideItem: React.FC<props> = ({ title, index, tranlate }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isVisible, ref] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={cn(
        'rounded-[45px] px-[60px] py-[41px] shadow-[rgba(0,0,15,1)_0px_5px_0px_0px] transition-all duration-500 ease-in tablet:p-[30px]',
        {
          'bg-grey': true,
          'bg-green': open,
          [tranlate]: true,
          'translate-x-0': isVisible,
        }
      )}
    >
      <div className="ml-1 flex items-center justify-between gap-x-3">
        <div className="flex items-center gap-x-[25px] font-medium">
          <span className="text-[60px] tablet:text-[30px]">0{index + 1}</span>
          <span className="text-[30px] tablet:text-[18px] mobile:max-w-[200px]">
            {title}
          </span>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-[50%] border-[1px] bg-grey duration-500 hover:bg-green"
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
