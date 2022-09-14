import clsx from 'clsx'

export interface Props {
  className?: string
}

const Language = ({ className }: Props) => {
  return (
    <div className={clsx(className,'flex justify-end ')}>
      <span></span>
    </div>
  )
}

export default Language
