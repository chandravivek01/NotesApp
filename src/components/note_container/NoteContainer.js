import React from 'react'

import Notes from '../notes/Notes'

import './note-container.css'

export default function NoteContainer(props) {

  const reverseArray = (arr) => {

    const array =[];
    for (let i=arr.length-1; i>=0; i--)
      array.push(arr[i]);
    return array;
  };

  const notes=reverseArray(props.notes);

  return (
    <>
      <div className="note-container_title">
        <h1>Notes</h1>
        <br />
        <div className="note-container_notes custom-scroll">
          { 
            notes.length>0?(notes.map( (item) => <Notes 
              key={item.id}
              notes={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
              updateTitle={props.updateTitle}
            />)):(<h3>No notes present.</h3>)
          }
        </div>
      </div>
    </>
  )
}
