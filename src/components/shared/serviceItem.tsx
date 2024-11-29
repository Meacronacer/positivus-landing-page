import Arrow from '../../assets/service-arrow.svg';

interface props {
  image: string;
  title1: string;
  title2: string;
  bg?: 'grey' | 'black' | 'green';
  bgText?: 'white' | 'green';
  bgArrow?: 'black' | 'white';
  arrow?: 'green' | 'black';
}

const ServiceItem: React.FC<props> = ({
  image,
  title1,
  title2,
  bg = 'grey',
  bgText = 'green',
  bgArrow = 'black',
  arrow = 'green',
}) => {
  return (
    <div
      className={`flex gap-x-3 laptop:relative bg-${bg} dekstop:max-w-full h-[310px] w-full max-w-[600px] items-center justify-between rounded-[45px] border-[1px] p-[50px] shadow-[rgba(0,0,15,1)_0px_5px_0px_0px]`}
    >
      <div className="flex h-[210px] flex-col justify-between">
        <div>
          <span
            className={`bg-${bgText} rounded-[7px] px-[7px] text-[30px] font-medium leading-[140%] laptop:text-[26px]`}
          >
            {title1}
          </span>
          <br />
          <span
            className={`bg-${bgText} rounded-[7px] px-[7px] text-[30px] font-medium leading-[120%] laptop:text-[26px]`}
          >
            {title2}
          </span>
        </div>
        <div className="group flex cursor-pointer items-center gap-x-[15px] laptop:gap-x-2">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-${bgArrow} transition-all duration-300 group-hover:scale-110`}
          >
            <Arrow className={`text-${arrow} h-5 w-5`} />
          </div>
          <span
            className={`group-hover:text-[#ff3000] text-${bgArrow} mobile:hidden text-[20px] leading-[140%] duration-300 laptop:text-[14px]`}
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
