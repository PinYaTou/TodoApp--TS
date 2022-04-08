import React from 'react'
import { Todo } from '../../../../Store/interfaces'
import Item from '../Item'
import './index.css'

interface Iprops {
  newUndoneList: Todo[];
  updateTodo: (id: string, updatePart: Partial<Todo>) => void;
  selectTodo: (id: string) => void;
}
export default function listPart(props: Iprops) {


  return (
    <div className='listPart'>
      <ul>
        {
          props.newUndoneList.map((todo) => {
            return <Item key={todo.id}
              {...todo}
              updateTodo={props.updateTodo}
              selectTodo={props.selectTodo}
            />
          })
        }
      </ul>
    </div>
  )
}
