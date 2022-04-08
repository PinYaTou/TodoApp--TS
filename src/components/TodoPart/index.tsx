import React from 'react'
import Header from './componnets/Header'
import ListPart from './componnets/List'
import Completed from './componnets/Completed'
import './index.css'
import { Todo } from '../../Store/interfaces'

interface Iprops {
  addTodo: (todoObj: Todo) => void;
  updateTodo: (id: string, updatePart: Partial<Todo>) => void;
  deleteTodo: (id: string) => void
  selectTodo: (id: string) => void;
  todoPartTitle: string;
  undoneList: Todo[];
}
export default function TodoPart(props: Iprops) {

  const newUndoneList = props.undoneList.filter((todo) => {
    return todo.done === false;
  }
  )

  const completedList = props.undoneList.filter((todo) => {
    return todo.done === true;
  }
  )
  return (
    <div className='todoPart'>
      <div className='mainPart'>
        <h2 className='title'>{props.todoPartTitle}</h2>
        <Header addTodo={props.addTodo} />
        <ListPart newUndoneList={newUndoneList}
          updateTodo={props.updateTodo}
          selectTodo={props.selectTodo}
        />
        <Completed completedList={completedList} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
      </div>
    </div>
  )
}
