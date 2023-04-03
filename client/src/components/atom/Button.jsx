import classNames from 'classnames/bind'
import style from './button.module.scss'
const cx = classNames.bind(style)

const Button = (props) => {
  const { type, onClick, children, className, disabled } = props
  const classProps = cx(className)
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

export default Button
