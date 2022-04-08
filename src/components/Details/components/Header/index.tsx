import React from 'react'
import './index.css'

interface Iprops {
  deleteTodo: Function;
  id: string;
}
export default function Header(props: Iprops) {
  const deteleTodo = () => {
    if (window.confirm('确定删除吗？')) {
      props.deleteTodo(props.id);
    }
  }
  return (
    <div className='header'>
      <div className='detele' onClick={deteleTodo} ></div>
    </div>
  )
}
