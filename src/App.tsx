import Header from './components/shared/header';
import ServiceItem from './components/shared/serviceItem';
import { Button } from './components/ui/button';

const ourParnetrs = [
  'amazon',
  'dribble',
  'hubspot',
  'notion',
  'netflix',
  'zoom',
];

const App: React.FC = () => {
  return (
    <section className="dekstop:pt-[30px] dekstop:px-[40px] mobile:pt-[15px] mobile:px-[20px] mx-auto max-w-[1440px] overflow-x-hidden px-[100px] pb-[200px] pt-[60px]">
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
          <ul className="mobile:mt-[60px] mobile:w-[calc(100%+120px)] mobile:ml-[-60px] mt-[70px] flex items-center justify-between laptop:grid laptop:grid-cols-3 laptop:gap-y-5">
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
            <h3 className="bg-green flex h-[51px] items-center rounded-[7px] px-[7px] text-[40px] font-medium">
              Services
            </h3>
            <p className="max-w-[580px] text-[18px] leading-[130%]">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>

          <div className="dekstop:grid-cols-1 mt-[80px] grid grid-cols-2 gap-[40px] laptop:mt-[40px] laptop:gap-[30px]">
            <ServiceItem
              title1="Search engine"
              title2="optimization"
              image="service1.svg"
            />
            <ServiceItem
              title1="Pay-per-click"
              title2="advertising"
              image="service2.svg"
              bg="green"
              bgText="white"
            />
            <ServiceItem
              title1="Social Media"
              title2="Marketing"
              image="service3.svg"
              bg="black"
              bgText="white"
              bgArrow="white"
              arrow="black"
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
              bg="green"
              bgText="white"
            />
            <ServiceItem
              title1="Analytics and "
              title2="Tracking"
              image="service6.svg"
              bg="black"
              bgArrow="white"
              arrow="black"
            />
          </div>
        </section>

        {/* let's make things happens  */}
        <section className="bg-grey relative mt-[124px] rounded-[45px] p-[60px] tablet:p-[50px]">
          <div className="mobile:text-left mobile mobile:gap-y-5 flex max-w-[500px] flex-col gap-y-[26px] laptop:max-w-[400px] laptop:text-center tablet:max-w-full tablet:items-center">
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
            className="dekstop:right-0 absolute right-[135px] top-[-20px] laptop:top-6 laptop:w-[30%] tablet:hidden"
          />
        </section>
      </main>
    </section>
  );
};

export default App;
