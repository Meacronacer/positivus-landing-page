import Arrow from '../../assets/service-arrow.svg';
import useInView from '../../hooks/useVisible';

interface props {
  image: string;
  title1: string;
  title2: string;
  bg?: 'bg-grey' | 'bg-black' | 'bg-green';
  bgText?: 'bg-white' | 'bg-green';
  bgArrow?: 'bg-black' | 'bg-white';
  arrowText?: 'text-black' | 'text-white';
  arrow?: 'text-green' | 'text-black';
  translate?: string;
}

const ServiceItem: React.FC<props> = ({
  image,
  title1,
  title2,
  bg = 'bg-grey',
  bgText = 'bg-green',
  bgArrow = 'bg-black',
  arrowText = 'text-black',
  arrow = 'text-green',
  translate = 'translate-x-[150px]',
}) => {
  const [isVisible, ref1] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref1 as React.RefObject<HTMLDivElement>}
      className={`flex gap-x-3 laptop:relative ${bg} ${isVisible ? 'translate-x-0' : translate} h-[310px] w-full max-w-[600px] items-center justify-between rounded-[45px] border-[1px] p-[50px] shadow-[rgba(0,0,15,1)_0px_5px_0px_0px] transition-all duration-1000 dekstop:max-w-full`}
    >
      <div className="flex h-[210px] flex-col justify-between">
        <div>
          <span
            className={`${bgText} rounded-[7px] px-[7px] text-[30px] font-medium leading-[140%] laptop:text-[26px]`}
          >
            {title1}
          </span>
          <br />
          <span
            className={`${bgText} rounded-[7px] px-[7px] text-[30px] font-medium leading-[120%] laptop:text-[26px]`}
          >
            {title2}
          </span>
        </div>
        <div className="group flex cursor-pointer items-center gap-x-[15px] laptop:gap-x-2">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-[50%] ${bgArrow} transition-all duration-300 group-hover:scale-110`}
          >
            <Arrow className={`${arrow} h-5 w-5`} />
          </div>
          <span
            className={`group-hover:text-[#ff3000] ${arrowText} text-[20px] leading-[140%] duration-300 laptop:text-[14px] mobile:hidden`}
          >
            Learn more
          </span>
        </div>
      </div>
      <div className="right-[50px] laptop:absolute laptop:h-[130px] laptop:w-[165px]">
        <img
          src={image}
          alt={image}
          className="bottom-[-40px] right-0 h-fit laptop:absolute"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServiceItem;
