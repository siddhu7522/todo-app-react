import React from 'react'
import "./Todo.css"
import { ListItem, ListItemText,List,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from "./firebase"
function Todo(props) {
    return (
        <List className="todo">
            <ListItem>
            <ListItemText primary="Todo" secondary={props.todo.todo}/>

            </ListItem>
            <Button onClick={event=>db.collection("todos").doc(props.todo.id).delete()}><DeleteIcon/>Delete</Button>
        </List>
        
       
    )
}

export default Todo
