import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import './index.css'
import { Todo } from '../../../../Store/interfaces';


interface Iprops {
  addTodo: (todoObj: Todo) => void;
}
export default function Header(props: Iprops) {

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
    const todoObj = { id: nanoid(), name: target.value, done: false, selected: false, date: '', Detail: [] };
    props.addTodo(todoObj);
    setValue('')
  }
  return (
    <div className='header'>
      <input value={value} onChange={handleChange} onKeyUp={handleKeyUp} type="text" placeholder='New task' />
    </div>
  )
}
