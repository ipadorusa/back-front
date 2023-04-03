import classNames from 'classnames/bind'
import style from './board.module.scss'
const cx = classNames.bind(style)

const BoardImgList = ({ data, isLoading }) => {
  if (isLoading) return <p>Loading users...</p>
  return (
    <div className={cx('board__img__list')}>
      {data?.map((item) => (
        <div className={cx('board__item')} key={item.userId}>
          <img src={item.avatar} alt="" />
          <span className={cx('board__item__name')}>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
export default BoardImgList
