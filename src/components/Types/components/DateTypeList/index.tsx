import React from 'react'
import './index.css'

interface Iprops {
  flag: boolean;
}

export default function DateTypeList(props: Iprops) {
  return (
    <div className='dateTypeList' style={{ opacity: props.flag ? 1 : 0 }}>
      <div className='search'>
        <input type="text" placeholder='Search' />
      </div>
      <ul>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>After tomorrow</li>
        <li>Past</li>
        <li>All</li>
      </ul>
    </div>
  )
}
