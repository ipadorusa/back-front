import classNames from 'classnames'
import style from './button.module.scss'
console.log('a', style)
let cx = classNames.bind(style)

const Button = (props) => {
  const { type, onClick, children, theme, size, className, disabled, dataIdx } = props
  const classProps = cx(className)
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
      data-idx={dataIdx}
    >
      {children}
    </button>
  )
}

export default Button
