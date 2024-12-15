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
import Footer from './components/shared/footer';
import { cn } from './utils/twMerge';
import useInView from './hooks/useVisible';

const ourParnetrs: string[] = [
  'amazon',
  'dribble',
  'hubspot',
  'notion',
  'netflix',
  'zoom',
];

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isVisible1, ref1] = useInView();
  const [isVisible2, ref2] = useInView();
  const [isVisible3, ref3] = useInView();
  const [isVisible4, ref4] = useInView();
  const [isVisible5, ref5] = useInView();
  const [isVisible6, ref6] = useInView();

  let sliderRef = useRef<null>(null);
  //@ts-ignore
  const next = () => sliderRef.slickNext();
  //@ts-ignore
  const previous = () => sliderRef.slickPrev();

  //@ts-ignore
  const beforeChange = (prev, next) => {
    setIndex(next);
  };

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    className: 'pb-[120px] tablet:pb-[40px]',
    centerPadding: '70px',
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
    <section className="mx-auto max-w-[1440px] overflow-x-hidden pt-[60px] dekstop:pt-[30px] mobile:pt-[15px]">
      <Header />

      <main className="mb-[140px] mt-[70px] px-[100px] dekstop:px-[40px] tablet:mb-[200px] tablet:mt-[40px] mobile:px-[20px]">
        {/* top content / book consultation */}
        <section
          ref={ref1}
          className={cn('transition-opacity duration-700 ease-in', {
            'opacity-0': true,
            'opacity-100': isVisible1,
          })}
        >
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
              <Button
                aria-label="book a consultation"
                className="tablet:mt-10 tablet:w-full"
              >
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
              translate="translate-x-[-150px]"
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
              translate="translate-x-[-150px]"
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
              translate="translate-x-[-150px]"
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
        <section
          ref={ref2}
          className={cn(
            'relative mt-[124px] rounded-[45px] bg-grey p-[60px] transition-all duration-700 ease-in tablet:mt-[70px] tablet:p-[50px]',
            {
              'opacity-0': true,
              'opacity-100': isVisible2,
            }
          )}
        >
          <div className="mobile flex max-w-[500px] flex-col gap-y-[26px] laptop:max-w-[400px] laptop:text-center tablet:max-w-full tablet:items-center mobile:gap-y-5 mobile:text-left">
            <span className="block text-[30px] font-medium leading-[130%]">
              Let’s make things happen
            </span>
            <p className="leading-[130%]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button aria-label="get yout free proposal">
              Get your free proposal
            </Button>
          </div>
          <img
            src="thingsHappens.svg"
            alt="thingsHappens"
            className="absolute right-[135px] top-[-20px] dekstop:right-0 laptop:top-6 laptop:w-[30%] tablet:hidden"
          />
        </section>

        {/* case studies */}
        <section
          ref={ref3}
          className={cn(
            'mt-[160px] transition-opacity duration-700 ease-in laptop:mt-[60px]',
            {
              'opacity-0': true,
              'opacity-100': isVisible3,
            }
          )}
        >
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
              alt="line"
              loading="lazy"
              className="px-[64px] dekstop:px-[32px] tablet:hidden"
            />
            <CaseStudioItem text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <img
              src="line.svg"
              alt="line"
              loading="lazy"
              className="px-[64px] dekstop:px-[32px] tablet:hidden"
            />
            <CaseStudioItem text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
          </div>
        </section>

        {/* our working process */}
        <section className="mt-[140px] tablet:mt-[60px]">
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h5 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-center text-[40px] font-medium mobile:text-[36px]">
              Our Working Process
            </h5>
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
              <GuideItem
                tranlate={
                  index % 2 === 0
                    ? 'translate-x-[-200px]'
                    : 'translate-x-[200px]'
                }
                key={index}
                title={item}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Team */}
        <section
          ref={ref4}
          className={cn(
            'mt-[140px] transition-opacity duration-700 ease-in tablet:mt-[60px]',
            {
              'opacity-0': true,
              'opacity-100': isVisible4,
            }
          )}
        >
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h6 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Team
            </h6>
            <p className="max-w-[473px] leading-[130%] laptop:text-center">
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>

          <div className="mt-[80px] grid grid-cols-3 gap-[40px] dekstop:grid-cols-2 tablet:mt-[40px] tablet:grid-cols-1">
            <TeamItem
              image="team1.png"
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
          <Button
            aria-label="see all team"
            className="ml-auto mt-[40px] block tablet:w-full"
          >
            See all team
          </Button>
        </section>

        {/* Testimonials */}
        <section
          ref={ref5}
          className={cn(
            'mt-[100px] transition-opacity duration-700 ease-in tablet:mt-[60px]',
            {
              'opacity-0': true,
              'opacity-100': isVisible5,
            }
          )}
        >
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h6 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Testimonials
            </h6>
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
                  <li key={item}>
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

        {/* Contact US */}
        <section
          ref={ref6}
          className={cn(
            'mt-[140px] transition-opacity duration-500 ease-in tablet:mt-[60px]',
            {
              'opacity-0': true,
              'opacity-100': isVisible6,
            }
          )}
        >
          <div className="flex items-center gap-x-[40px] gap-y-[30px] laptop:flex-col">
            <h6 className="flex h-[51px] items-center rounded-[7px] bg-green px-[7px] text-[40px] font-medium">
              Contact Us
            </h6>
            <p className="max-w-[323px] leading-[130%] laptop:text-center">
              Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
          </div>

          <form className="relative mt-[80px] rounded-[45px] bg-grey px-[100px] pb-[80px] pt-[60px] tablet:mt-[40px] tablet:px-[30px] tablet:pt-[40px]">
            <div className="flex max-w-[556px] flex-col gap-y-[40px] laptop:max-w-full">
              <div className="flex items-center gap-x-[35px]">
                <div className="flex items-center gap-x-[14px]">
                  <input
                    type="radio"
                    className="h-[28px] w-[28px] appearance-none rounded-[50%] border-black bg-white outline outline-[1px] transition-all checked:border-[6px] checked:border-white checked:bg-green"
                    id="first"
                    name="radio"
                    defaultChecked
                  />
                  <label htmlFor="first">Say Hi</label>
                </div>
                <div className="flex items-center gap-x-[14px]">
                  <input
                    type="radio"
                    className="h-[28px] w-[28px] appearance-none rounded-[50%] border-black bg-white outline outline-[1px] transition-all checked:border-[6px] checked:border-white checked:bg-green"
                    id="second"
                    name="radio"
                  />
                  <label htmlFor="second">Get a Quote</label>
                </div>
              </div>
              <div className="flex flex-col gap-y-[25px]">
                <div className="flex flex-col gap-y-[5px]">
                  <label>Name</label>
                  <input
                    placeholder="Name"
                    className="rounded-[14px] border-[1px] px-[30px] py-[18px] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[5px]">
                  <label>Email*</label>
                  <input
                    placeholder="Email"
                    className="rounded-[14px] border-[1px] px-[30px] py-[18px] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[5px]">
                  <label>Message*</label>
                  <textarea
                    placeholder="Email"
                    className="h-[190px] resize-none rounded-[14px] border-[1px] px-[30px] py-[18px] focus:outline-none tablet:h-[132px]"
                  />
                </div>
              </div>
              <Button
                aria-label="send message"
                className="w-full tablet:absolute tablet:bottom-[-100px] tablet:left-0 tablet:right-0 tablet:mx-auto"
              >
                Send Message
              </Button>
            </div>
            <div className="absolute right-0 top-[132px] laptop:hidden">
              <img
                src="formImage.svg"
                alt="image"
                loading="lazy"
                height="648"
                width="548"
              />
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default App;
