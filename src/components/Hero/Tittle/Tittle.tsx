import clsx from "clsx";


export interface Props {
  className?: string;
}

const Tittle = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "text-amber-700",
        "flex justify-center",
        "font-accent",
        "-rotate-12 transform-gpu",
        "-translate-y-6",
        "text-5xl",
        "py-3"
      )}
    >
      <div>LINSIKA.LK</div>
    </div>
  );
};

export default Tittle;
