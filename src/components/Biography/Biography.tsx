import clsx from "clsx";

export interface Props {
  className?: string;
}

const Biography = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,

        "p-4 ",
        "flex justify-center",
        "text-neutral-50",
        "border-2 border-indigo-600",
        "rounded-lg",
        "m-auto",
        "max-w-lg ",
        "mt-4"
      )}
    >
      <span>
        Hi....I am Linsika Karunaamoththy, am from kilinochchi I fnished my a.l exam
        now am stusied in UKI coding school,(UKI coding school-Kilinochchi
        center, No:423 Kilinochchi 44000 srilanka phone0212284647) my ambition is
        software engineer so i developping my skills,
      </span>
    </div>
  );
};

export default Biography;
