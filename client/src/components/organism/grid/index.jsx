import classNames from 'classnames/bind'
import style from './grid.module.scss'
import { useState } from 'react'
import { useList, useAddList, useDeleteList } from '@/src/hooks/useList'
const cx = classNames.bind(style)

const GridTest = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const onSuccess = (data) => {
    console.log('onSuccess', data)
  }
  const onError = (error) => {
    console.log('error', error)
  }
  const { data: list } = useList(onSuccess, onError)
  const { mutate: addList, isLoading, isError, error } = useAddList()
  const { mutate: delList } = useDeleteList()

  const handleAddClick = () => {
    const item = { name, alterEgo }
    addList(item)
  }

  const handleEvt = (idx) => delList(idx)
  return (
    <div className="grid__container">
      <div className="grid__item">1</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
      <button type="button" onClick={handleAddClick}>
        Add Hero
      </button>
      <div>
        <ul>
          {list?.data.map((item, idx) => (
            <li key={item.id}>
              {item.name} / {item.alterEgo}
              <button type="button" onClick={() => handleEvt(item.id)}>
                삭제
              </button>
              <button type="button" onClick={() => handleModify(item.id)}>
                수정
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GridTest
