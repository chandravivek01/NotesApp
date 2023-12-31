import React, { useState } from 'react'
import plusIcon from '../../assets/plus.png'
import './sidebar.css'

export default function Sidebar(props) {

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <img src={plusIcon} alt="plus" onClick={() => setListOpen(!listOpen)}/>
        <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
          {
            colors.map((item, index) => (
              <li 
                key={index} 
                className="sidebar_list_item" 
                style={{backgroundColor:item}}
                onClick={()=>props.addNotes(item)}
              />
            ))
          }  
        </ul>
      </div>
    </>
  )
}
