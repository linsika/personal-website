import clsx from "clsx";
import Typed from 'react-typed';
export interface Props {
  className?: string;
}

const Subtittle = ({ className }: Props) => {
  return (
    <div className={clsx(className,  "flex justify-center","text-cyan-900","px-2")}>
      
     <Typed
     className="flex justify-center text-2xl "
      strings={["front end developper","SE","Srilanka.lk"]}loop />
     
    </div>
  );
};

export default Subtittle;
