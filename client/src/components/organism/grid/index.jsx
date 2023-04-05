import classNames from 'classnames/bind'
import style from './grid.module.scss'
import { useState } from 'react'
import { useList, useAddList } from '@/src/hooks/useList'
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

  const handleAddClick = () => {
    const item = { name, alterEgo }
    addList(item)
  }
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
          {list?.data.map((item) => (
            <li key={item.id}>
              {item.name} / {item.alterEgo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GridTest
