import React from 'react'
import { Type } from '../../Store/interfaces'
import CraeteNewList from './components/CraeteNewList'
import DateTypeList from './components/DateTypeList'
import Header from './components/Header'
import TypeList from './components/TypeList'
import './index.css'

interface Iprops {
  flag: boolean;
  typeList: Type[];
  getHeaderFlag: Function;
  changeTypes: Function;
}

export default function Types(props: Iprops) {
  return (
    <div className='types'>
      <Header getHeaderFlag={props.getHeaderFlag} />
      <DateTypeList flag={props.flag} />
      <TypeList flag={props.flag} typeList={props.typeList} changeTypes={props.changeTypes} />
      <CraeteNewList flag={props.flag} />
    </div>
  )
}
