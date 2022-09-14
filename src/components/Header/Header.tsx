import clsx from "clsx";
import TeamSwitch from "./TeamSwitch";
import LanguageSwitch from "./LanguageSwitch";


export interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
       "bg-orange-300",
        "text-gray-50",
        "flex justify-end ",
        
        

      )}
    >
      <LanguageSwitch />
      <TeamSwitch />
    </div>
  );
};

export default Header;
