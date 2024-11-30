import LogoIcon from '../../assets/logo.svg';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <section className="mx-[100px] h-[514px] rounded-t-[45px] bg-dark px-[60px] py-[55px] text-white dekstop:mx-[40px] dekstop:h-fit tablet:px-[20px] mobile:mx-0 mobile:rounded-t-[0px]">
      <div className="flex items-center justify-between gap-y-[37px] laptop:flex-col">
        <LogoIcon className="h-[29px] w-[180px]" />
        <ul className="flex items-center gap-x-[40px] gap-y-[15px] tablet:flex-col">
          {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map(
            (item) => (
              <li key={item}>
                <a href="#" className="underline">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <div className="flex items-center gap-x-[20px]">
          <img src="linkedin-white.svg" loading="lazy" alt="linkedin" />
          <img src="facebook.svg" loading="lazy" alt="facebook" />
          <img src="twitter.svg" loading="lazy" alt="twitter" />
        </div>
      </div>

      <div className="mt-[66px] flex items-center justify-between tablet:flex-col tablet:gap-y-[37px]">
        <div className="max-w-[332px] tablet:text-center">
          <span className="rounded-[7px] bg-green px-[7px] text-[20px] font-medium text-black">
            Contact us:
          </span>
          <span className="mt-[27px] block leading-[100%]">
            Email: info@positivus.com
          </span>
          <span className="my-[20px] block">Phone: 555-567-8901</span>
          <p className="leading-[120%]">
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="flex items-center gap-[20px] rounded-[14px] bg-[#292a32] px-[40px] py-[58px] dekstop:w-full dekstop:max-w-[500px] dekstop:flex-col">
          <input
            placeholder="Email"
            className="h-[67px] max-w-[285px] rounded-[14px] border-[1px] border-white bg-black px-[35px] py-[22px] text-white dekstop:w-full dekstop:max-w-full"
          />
          <Button
            aria-label="subscribe to news"
            className="w-full"
            variant="green"
          >
            Subscribe to news
          </Button>
        </div>
      </div>

      <hr className="my-[50px]" />

      <div className="mobile: flex flex-col items-center gap-x-[40px] gap-y-[15px]">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <span className="underline">Privacy Policy</span>
      </div>
    </section>
  );
};

export default Footer;
