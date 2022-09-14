import clsx from "clsx";
import SocialMedia from "./SocialMedia";
import UkiAddress from "./UkiAddress";
import UkiLogo from "./UkiLogo";
import YarlItHabLogo from "./YarlItHabLogo";

export interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className, "flex justify-center",'bg-cyan-200','p-5',)}>
      <div className="flex gap-20">
      <YarlItHabLogo />
      <UkiLogo />
        <UkiAddress />
        
        
      </div>

      <SocialMedia />
    </div>
  );
};

export default Footer;
