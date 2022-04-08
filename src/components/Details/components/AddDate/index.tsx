import React, { useState } from 'react'
import './index.css'

interface Iprops {
  addDate: (id: string) => void;
}
export default function AddDate(props: Iprops) {
  const [flag, setFlag] = useState(true);
  const changeFlag = (flag: boolean) => {
    setFlag(!flag);
  }


  const [value, setValue] = useState('');

  function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
    setValue(e.target.value);
  }

  function handleKeyUp(event: { key: any; target: any; }) {
    const { key, target } = event;
    if (key !== 'Enter') return;
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    const date = target.value;
    props.addDate(date);
    setValue('')
  }

  return (
    <div className='addDate' onMouseEnter={() => changeFlag(true)} onMouseLeave={() => changeFlag(false)}>
      <span style={{ display: flag ? 'block' : 'none' }}>Add date</span>
      <input type="text" style={{ display: flag ? 'none' : 'block' }}
        value={value} onChange={handleChange}
        onKeyUp={handleKeyUp} />
    </div>
  )
}
