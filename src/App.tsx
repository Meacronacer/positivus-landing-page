import Header from './components/shared/header';
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
    <section className="dekstop:pt-[30px] dekstop:px-[40px] mobile:pt-[15px] mobile:px-[20px] mx-auto max-w-[1440px] overflow-x-hidden px-[100px] pt-[60px]">
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
      </main>
    </section>
  );
};

export default App;
