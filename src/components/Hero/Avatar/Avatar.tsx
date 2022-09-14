import clsx from "clsx";
import profile from './linsika-profile.png'
export interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className,  "flex justify-center",)}>
      <img src={profile} alt="linsika" className="h-40" />
    </div>
  );
};

export default Avatar;
