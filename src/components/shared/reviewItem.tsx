const ReviewItem = () => {
  return (
    <div className="mx-auto flex h-fit w-[606px] flex-col text-white tablet:w-[330px]">
      <div className="relative h-[238px] rounded-[45px] border-[1px] border-green px-[52px] py-[48px] tablet:h-fit tablet:px-[30px]">
        <p className="leading-[130%] tablet:w-fit">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </p>
        <img
          src="reviewTriangle.svg"
          alt="T"
          loading="lazy"
          className="absolute bottom-[-28px] rotate-[-1deg]"
        />
      </div>
      <div className="mt-[48px] flex flex-col pl-[80px] tablet:pl-[50px]">
        <span className="text-[20px] font-medium text-green">John Smith</span>
        <span className="text-[18px] leading-[100%]">
          {' '}
          Marketing Director at XYZ Corp
        </span>
      </div>
    </div>
  );
};

export default ReviewItem;
