import clsx from "clsx";
import Avatar from "./Avatar";
import Tittle from "./Tittle";
import Typed from "./Subtittle";
export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        
        "text-gray-50",
        
        "flex-col"
      )}
    >
      <Avatar />
      <Tittle />
      <Typed />
    </div>
  );
};

export default Hero;
