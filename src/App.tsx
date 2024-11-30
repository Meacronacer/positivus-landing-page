import { useRef, useState } from 'react';
import CaseStudioItem from './components/shared/caseStudioItem';
import GuideItem from './components/shared/guideItem';
import Header from './components/shared/header';
import ReviewItem from './components/shared/reviewItem';
import ServiceItem from './components/shared/serviceItem';
import TeamItem from './components/shared/teamItem';
import { Button } from './components/ui/button';
import Slider from 'react-slick';
import DotIcon from './assets/dot.svg';
import ArrowLeftIcon from './assets/arrow-left.svg';
import ArrowRightIcon from './assets/arrow-right.svg';

const ourParnetrs = [
  'amazon',
  'dribble',
  'hubspot',
  'notion',
  'netflix',
  'zoom',
];

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  let sliderRef = useRef<null>(null);
  //@ts-ignore
  const next = () => sliderRef.slickNext();
  //@ts-ignore
  const previous = () => sliderRef.slickPrev();

  //@ts-ignore
  const beforeChange = (prev, next) => {
    setIndex(next);
    //console.log(next, data.length - 5);
  };

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    className: 'flex items-center pb-[120px] tablet:pb-[40px]',
    centerPadding: '70px tablet:10px',
    speed: 500,
    slidesToShow: 1.679,
    slidesToScroll: 1,
    arrow: false,
    beforeChange: beforeChange,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };
  return (
    <section className="mx-auto max-w-[1440px] overflow-x-hidden px-[100px] pb-[200px] pt-[60px] dekstop:px-[40px] dekstop:pt-[30px] mobile:px-[20px] mobile:pt-[15px]">
      <Header />

      <main className="mt-[70px] tablet:mt-[40px]">
        {/* top content / book consultation */}
        <section>
          <div className="flex justify-between gap-x-5 tablet:flex-col">
            <div className="flex max-w-[531px] flex-col gap-y-[35px] tablet:contents">
              <h1 className="text-[60px] font-medium leading-[130%] tablet:order-[-3] tablet:text-[43px]">
                Navigating the digital landscape for success
              </h1>
              <p className="max-w-[498px] text-[20px] leading-[135%] tablet:mt-5 tablet:text-[16px]">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <Button className="tablet:mt-10 tablet:w-full">
                Book a consultation
              </Button>
            </div>
            <div className="flex items-start target:mt-[10px] tablet:order-[-1]">
              <img
                src="book-consultation.svg"
                alt="book-consultation"
                loading="lazy"
                className="h-[515px] w-[600px] min-w-[300px] tablet:h-fit tablet:w-full"
              />
            </div>
          </div>
          <ul className="mt-[70px] flex items-center justify-between laptop:grid laptop:grid-cols-3 laptop:gap-y-5 mobile:ml-[-60px] mobile:mt-[60px] mobile:w-[calc(100%+120px)]">
            <h2 className="hidden">Our partners</h2>
            {ourParnetrs.map((item, index) => (
              <li
                className={`flex justify-center ${index < 3 ? 'mobile:justify-end' : 'mobile:justify-start'}`}
                key={index}
              >
                <img
                  className="grayscale-[1]"
                  src={`${item}.svg`}
                  alt={item}
                  width="130"
                  height="48"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* services */}
        <section className="mt-[130px] laptop:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h3 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Services
            </h3>
            <p className="max-w-[580px] text-[18px] leading-[130%]">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>

          <div className="mt-[80px] grid grid-cols-2 gap-[40px] dekstop:grid-cols-1 laptop:mt-[40px] laptop:gap-[30px]">
            <ServiceItem
              title1="Search engine"
              title2="optimization"
              image="service1.svg"
            />
            <ServiceItem
              title1="Pay-per-click"
              title2="advertising"
              image="service2.svg"
              bg="bg-green"
              bgText="bg-white"
            />
            <ServiceItem
              title1="Social Media"
              title2="Marketing"
              image="service3.svg"
              bg="bg-black"
              bgText="bg-white"
              bgArrow="bg-white"
              arrowText="text-white"
              arrow="text-black"
            />
            <ServiceItem
              title1="Email"
              title2="Marketing"
              image="service4.svg"
            />
            <ServiceItem
              title1="Content"
              title2="Creation"
              image="service5.svg"
              bg="bg-green"
              bgText="bg-white"
            />
            <ServiceItem
              title1="Analytics and "
              title2="Tracking"
              image="service6.svg"
              bg="bg-black"
              bgArrow="bg-white"
              arrow="text-black"
              arrowText="text-white"
            />
          </div>
        </section>

        {/* let's make things happens  */}
        <section className="relative mt-[124px] rounded-[45px] bg-grey p-[60px] tablet:mt-[70px] tablet:p-[50px]">
          <div className="mobile flex max-w-[500px] flex-col gap-y-[26px] laptop:max-w-[400px] laptop:text-center tablet:max-w-full tablet:items-center mobile:gap-y-5 mobile:text-left">
            <span className="block text-[30px] font-medium leading-[130%]">
              Let’s make things happen
            </span>
            <p className="leading-[130%]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button>Get your free proposal</Button>
          </div>
          <img
            src="thingsHappens.svg"
            alt="thingsHappens"
            className="absolute right-[135px] top-[-20px] dekstop:right-0 laptop:top-6 laptop:w-[30%] tablet:hidden"
          />
        </section>

        {/* case studies */}
        <section className="mt-[160px] laptop:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h4 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Case Studies
            </h4>
            <p className="max-w-[580px] leading-[130%]">
              Explore Real-Life Examples of Our Proven Digital Marketing Success
              through Our Case Studies
            </p>
          </div>

          <div className="mt-[80px] flex h-[326px] justify-center rounded-[45px] bg-dark px-[60px] py-[70px] text-white dekstop:items-center dekstop:p-10 laptop:mt-[40px] tablet:grid tablet:grid-flow-col tablet:justify-start tablet:gap-x-[20px] tablet:overflow-x-scroll tablet:bg-white tablet:p-0">
            <CaseStudioItem text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            <img
              src="line.svg"
              className="px-[64px] dekstop:px-[32px] tablet:hidden"
            />
            <CaseStudioItem text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <img
              src="line.svg"
              className="px-[64px] dekstop:px-[32px] tablet:hidden"
            />
            <CaseStudioItem text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
          </div>
        </section>

        {/* our working process */}
        <section className="mt-[140px] tablet:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h4 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-center text-[40px] font-medium mobile:text-[36px]">
              Our Working Process
            </h4>
            <p className="max-w-[292px] leading-[130%] mobile:text-center">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>

          <div className="mt-[80px] flex flex-col gap-y-[30px] tablet:mt-[30px]">
            {[
              'Consultation',
              'Research and Strategy Development',
              'Implementation',
              'Monitoring and Optimization',
              'Reporting and Communication',
              'Continual Improvement',
            ].map((item, index) => (
              <GuideItem key={index} title={item} index={index} />
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-[140px] tablet:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h4 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Team
            </h4>
            <p className="max-w-[473px] leading-[130%] laptop:text-center">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>

          <div className="mt-[80px] grid grid-cols-3 gap-[40px] dekstop:grid-cols-2 tablet:mt-[40px] tablet:grid-cols-1">
            <TeamItem
              image="picture.png"
              name="John Smith"
              position="CEO and Founder"
              description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
            />
            <TeamItem
              image="team2.png"
              name="Jane Doe"
              position="Director of Operations"
              description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
            />
            <TeamItem
              image="team3.png"
              name="Michael Brown"
              position="Senior SEO Specialist"
              description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
            />
            <TeamItem
              image="team4.png"
              name="Emily Johnson"
              position="PPC Manager"
              description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
            />
            <TeamItem
              image="team5.png"
              name="Brian Williams"
              position="Social Media Specialist"
              description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
            />
            <TeamItem
              image="team6.png"
              name="Sarah Kim"
              position="Content Creator"
              description="2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
            />
          </div>
          <Button className="ml-auto mt-[40px] block tablet:w-full">
            See all team
          </Button>
        </section>

        {/* Testimonials */}
        <section className="mt-[100px] tablet:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h4 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Testimonials
            </h4>
            <p className="max-w-[473px] leading-[130%] laptop:text-center">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </p>
          </div>

          <div className="relative mt-[80px] h-[625px] rounded-[45px] bg-dark pt-[84px] tablet:mt-[40px] tablet:pt-[30px]">
            <Slider
              ref={(slider) => {
                //@ts-ignore
                sliderRef = slider;
              }}
              {...settings}
            >
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </Slider>

            <div className="mx-auto flex max-w-[587px] items-center justify-between tablet:px-5">
              <ArrowLeftIcon
                onClick={previous}
                className={`${index === 0 ? 'text-white/30' : 'cursor-pointer text-white'}`}
              />
              <ul className="asbolute bottom-0 left-0 right-0 flex items-center justify-center gap-x-[19px]">
                {[0, 1, 2, 3, 4].map((item) => (
                  <li>
                    <DotIcon
                      className={`${item === index ? 'text-green' : 'text-white'}`}
                    />
                  </li>
                ))}
              </ul>
              <ArrowRightIcon
                onClick={next}
                className={`mr-5 tablet:mr-0 ${index === 4 ? 'text-white/30' : 'cursor-pointer text-white'}`}
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default App;
