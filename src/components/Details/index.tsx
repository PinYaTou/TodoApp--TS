import React from 'react'
import { Todo } from '../../Store/interfaces'
import AddDate from './components/AddDate'
import AddDetail from './components/AddDetail'
import Header from './components/Header'
import Introduction from './components/Introduction'
import './index.css'

interface Iprops {
  todo: Todo;
  deleteTodo: Function;
  changeName: Function;
  addDetail: Function;
  addDate: Function;
}
export default function Detail(props: Iprops) {

  return (
    <div className='detail'>
      <Header id={props.todo.id} deleteTodo={props.deleteTodo} />
      <Introduction name={props.todo.name} id={props.todo.id} changeName={props.changeName} />
      <AddDate addDate={props.addDate} />
      <AddDetail details={props.todo.Detail}
        addDetail={props.addDetail}
      />
    </div>
  )
}
