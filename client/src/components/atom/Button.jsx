import classNames from 'classnames'
import style from './button.module.scss'
let cx = classNames.bind(style)

const Button = ({ event, label, btnClass }) => {
  return (
    <button type="button" onClick={() => event} className={cx(`${btnClass}`)}>
      {label}
    </button>
  )
}
export default Button
