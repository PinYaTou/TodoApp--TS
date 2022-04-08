import React from 'react'
import './index.css'

interface Iprops {
  name: string;
  id: string;
  changeName: (id: string, name: string) => void;
}
export default function Introduction(props: Iprops) {

  const changeName = (event: { target: { value: any; }; }) => {
    props.changeName(props.id, event.target.value);
  }
  return (
    <div className='introduction'>
      <input type="text" name="" id="" value={props.name} onChange={changeName} />
      <textarea placeholder='Add introduction'></textarea>
    </div>
  )
}
