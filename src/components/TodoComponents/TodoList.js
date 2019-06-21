// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const TodoList = (props) => {
        return (
            <div>
                <ToDo 
                key = {ToDo.id}
                value = {ToDo.task}
                />
            </div>
    )
}




export default TodoList;