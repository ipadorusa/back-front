import classNames from 'classnames/bind'
import style from './skeleton.module.scss'
const cx = classNames.bind(style)

const Skeleton = () => {
  return (
    <div className={cx('skeleton-item')}>
      <div>
        <div className={cx('skeleton-img')} />
      </div>
      <div className={cx('skeleton')}>
        <p className={cx('skeleton-name')} />
        <p className={cx('skeleton-email')} />
      </div>
    </div>
  )
}

export default Skeleton
