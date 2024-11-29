import Arrow from '../../assets/service-arrow.svg';

const CaseStudioItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="laptop:bg-dark flex w-[286px] flex-col gap-y-[20px] rounded-[45px] tablet:w-[350px] tablet:px-[50px] tablet:py-[42px]">
      <p className="leading-[130%] tablet:text-[16px]">{text}</p>
      <div className="group flex w-fit cursor-pointer items-center gap-x-[15px]">
        <span className="text-green block text-[20px] group-hover:opacity-75">
          Learn more
        </span>
        <Arrow className="text-green h-5 w-5 group-hover:opacity-75" />
      </div>
    </div>
  );
};

export default CaseStudioItem;
