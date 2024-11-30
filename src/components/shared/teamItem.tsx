interface props {
  image: string;
  name: string;
  position: string;
  description: string;
}

const TeamItem: React.FC<props> = ({ image, name, position, description }) => {
  return (
    <div className="rounded-[45px] border-[1px] px-[35px] py-[40px] shadow-[rgba(0,0,15,1)_0px_5px_0px_0px]">
      <div className="relative flex items-end gap-x-[20px]">
        <img src={image} alt="profile" loading="lazy" />
        <div className="flex flex-col">
          <cite className="text-[20px] font-medium">{name}</cite>
          <cite className="leading-[100%]">{position}</cite>
        </div>
        <img
          src="linkedin.svg"
          alt={name}
          className="absolute right-0 top-0 cursor-pointer duration-300 hover:scale-110"
        />
      </div>
      <hr className="my-[28px]" />
      <p>{description}</p>
    </div>
  );
};

export default TeamItem;
