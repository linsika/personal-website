import clsx from 'clsx'
import ukiLogo from './uki-logo.png'

export interface Props {
  className?: string
}

const UkiLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className , )}>
      <img src={ukiLogo} alt="uki logo" className="h-24" />
    </div>
  )
}

export default UkiLogo
