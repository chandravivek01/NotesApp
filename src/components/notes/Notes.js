import React from 'react'

import './notes.css'

import deleteIcon from '../../assets/delete.png'

export default function Notes(props) {

    let timer=500, timeout;
    const formatDate = (value) => {

        if (!value)
            return "";
        
        const date = new Date(value);
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const month = months[date.getMonth()];
        
        let hrs = date.getHours();        
        let amPm = hrs>12 ? "PM" : "AM";
        hrs = hrs>12 ? (hrs =24-hrs) : hrs;
        hrs = hrs<10 ? "0"+hrs : hrs;

        let min = date.getMinutes();
        min = min<10 ? "0"+min : min;

        let day = date.getDate();
        
        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    };

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    }

    const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
    }

    const updateTitle = (title, id) => {
        debounce(() => props.updateTitle(title, id));
    }

    return (
        <div className='notes' style={{backgroundColor:props.notes.color}}>
            <input className='notes_title' 
                    defaultValue={props.notes.title} 
                    onChange={(event) => updateTitle(event.target.value, props.notes.id)}
            />
            <textarea 
                className='notes_text' 
                defaultValue={props.notes.text} 
                onChange={(event) => updateText(event.target.value, props.notes.id)}
                cols="30" rows="10"></textarea>
            <div className='notes_footer'>
                <p>{formatDate(props.notes.time)}</p>
                <img src={deleteIcon} alt="Delete" onClick={()=>props.deleteNote(props.notes.id)} />
            </div>
            
        </div>
    )
}
