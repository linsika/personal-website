import clsx from "clsx";

export interface Props {
  className?: string;
}

const UkiAddress = ({ className }: Props) => {
  return (
    <div className={clsx(className,'text-black')}>
      <div>
       UKI coding school-Kilinochchi center,<br/> No:423 Kilinochchi 44000 srilanka<br/>phone0212284647
        
      </div>
    </div>
  );
};

export default UkiAddress;
