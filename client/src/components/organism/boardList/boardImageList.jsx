import classNames from 'classnames/bind'
import style from './board.module.scss'
const cx = classNames.bind(style)
import Skeleton from '../../atom/Skeleton'

const BoardImgList = ({ data, isLoading, isFetching }) => {
  if (isLoading) return <Skeleton />
  return (
    <div className={cx('board__img__list')}>
      {isLoading || isFetching
        ? new Array(10).fill(1).map((_, i) => {
            return <Skeleton key={i} />
          })
        : data?.map((item) => (
            <div className={cx('board__item')} key={item.userId}>
              <img src={item.avatar} alt="ASDF" />
              <span className={cx('board__item__name')}>{item.name}</span>
            </div>
          ))}
    </div>
  )
}
export default BoardImgList
