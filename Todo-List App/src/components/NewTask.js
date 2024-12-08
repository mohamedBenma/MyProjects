import React from 'react';
import Tasks from './Tasks';
const NewTask = ({ task, b, hour }) => {
    console.log(task)


    return (
        <div className='newTask'>
            <img src="note.jpg" alt="note-logo" width="40px" height="60px" />
            <h1>{task}</h1>
            <div className='horloge'><img src="horloge.png" alt="horloge-log" width="40px" height="55px" /></div>
            <div className='hour'><h1>{hour}</h1></div>
            <h2>{b}</h2>
        </div>
    );
};

export default NewTask;