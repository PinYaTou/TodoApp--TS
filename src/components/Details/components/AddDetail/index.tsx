import React, { useState } from 'react'
import './index.css'
import { nanoid } from 'nanoid';
import { Detail } from '../../../../Store/interfaces';

interface Iprops {
  details: Detail[];
  addDetail: Function;
}

export default function AddDetail(props: Iprops) {



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
    const detailObj = { id: nanoid(), title: target.value };
    props.addDetail([detailObj, ...props.details]);
    setValue('')
  }


  return (
    <div className='addDetail'>
      <input className='addSubtasks' type="text" placeholder='Add subtasks'
        value={value} onChange={handleChange}
        onKeyUp={handleKeyUp} />
      <ul >
        {

          props.details.map((detail) => {
            return (
              <li key={detail.id}>
                <input className='radio' type="radio" />
                <span className='showSubtasks' >{detail.title}</span>
              </li>
            )
          })
        }

      </ul>
    </div>
  )


}
