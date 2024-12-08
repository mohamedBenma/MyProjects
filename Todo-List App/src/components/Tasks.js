import React, { useState } from 'react';
import NewTask from './NewTask';
import Swal from 'sweetalert2';

const Tasks = () => {
    const [time, setTime] = useState("");
    const [taskTab, setTaskTab] = useState([])
    const [todos, setTodos] = useState([])
    const handleChange = e => {
        setTaskTab(e.target.value)

    }
    const handleDelete = e => {
        let res;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your task has been deleted.',
                    'success'
                )
                console.log("checked" + e.target.name)
                var newArray = todos.filter(function (f) { return f !== e.target.name })
                console.log("nvtableau" + newArray)
                setTodos(newArray)

            }
        })
        /*  console.log(res);
         if (res) {
             if (todos.length == 1) {
                 console.log("supprimer derniere tache");
                 setTodos([])
             }
             else {
                 console.log("checked" + e.target.name)
                 var newArray = todos.filter(function (f) { return f !== e.target.name })
                 console.log("nvtableau" + newArray)
                 setTodos(newArray)
 
             }
         } */




    }
    const handleSubmit = e => {
        const test = "test"
        test.indexOf("t")
        e.preventDefault()
        if (!todos.includes(taskTab) && taskTab.length != 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your task: ** ' + taskTab + '** is succesfully added',
                showConfirmButton: false,
                timer: 2000
            })
            const taskNdHour = taskTab + "(" + time
            const newTodos = [taskNdHour, ...todos]

            setTodos(newTodos);
            console.log(newTodos)
        }
        else {
            alert(taskTab + " incorrect task or already entered, enter another task please")
        }
    }
    const handleTimeChange = e => {
        setTime(e.target.value)
    }
    const deleteAll = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (todos.length != 0) {
                    setTodos([])
                    Swal.fire(
                        'Deleted!',
                        'Your task has been deleted.',
                        'success'
                    )
                }
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        })



    }
    const extract_String = (str) => {
        const index = str.indexOf("(")
        const taskName = str.substring(0, index);
        const hour = str.substring(index + 1, str.length);
        return [taskName, hour]
    }

    return (
        <div className='render'>
            {/* <input type="search" placeholder='add a task' onChange={handleChange} required />

            <button onClick={handleSubmit} >add task </button>
            <h4>Taches pour aujourd'hui !</h4> */}
            <div className='entete-liste'>
                <img src="./logo-todo.png" alt="" width="60px" height="60px" />
                <div className='todo'><h2>To Do List</h2></div>
            </div>

            <div className="container">
                <div className="form">
                    <input type="text" className="input" placeholder='add a task' onChange={handleChange} required />
                    <input type='time' onChange={handleTimeChange} />

                    <button onClick={handleSubmit} className="add" id={time}>add task </button>
                </div>
            </div>
            <div>
                <div className="tasks">
                    {todos.map((task, index) =>
                        <NewTask key={index} task={extract_String(task)[0]} hour={extract_String(task)[1]}
                            b={<input type="button" name={task} id={task} value="supprimer" className="buttonDelete" onClick={handleDelete} h1 />} />
                    )}
                </div>

            </div>
            <div className="delete-all" onClick={deleteAll}>Delete all</div>
        </div>

    );

};

export default Tasks;