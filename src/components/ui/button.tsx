import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/twMerge';

const ButtonsVariants = cva(
  `rounded-[14px] border-[1px] h-[68px] w-fit px-[35px] py-5 text-center text-[20px] leading-[120%] transition-colors duration-300
   hover:bg-black hover:text-white active:bg-green
   `,
  {
    variants: {
      variant: {
        default:
          'hover:bg-black hover:text-white active:bg-green bg-black text-white',
        white: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonsVariants> {}

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      className={cn(ButtonsVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Button, ButtonsVariants };
