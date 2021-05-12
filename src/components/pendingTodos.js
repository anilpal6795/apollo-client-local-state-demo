import React from 'react';
import { 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    Divider,
    IconButton
} from '@material-ui/core';
import Done from '@material-ui/icons/Done';
import Delete from '@material-ui/icons/Delete';
import { useBaseStyles, StyledBox } from '../styles/app.styles';

const PendingTodos = ({
    todosData,
    complete,
    remove
}) => {
    const classes = useBaseStyles();

    const pendingTodos = todosData && Array.isArray(todosData) && todosData.length > 0 ? todosData.filter(
        todo => todo.completed === false
    ): [];

    return (
        <>
            {pendingTodos.length > 0 && <StyledBox>
                <List component="ul" className={classes.list}>
                    {pendingTodos.map(todo => (
                        <>
                            <ListItem key={todo.id} className={classes.listItem}>
                                <ListItemText>{todo.text}</ListItemText>
                                <ListItemIcon>
                                    <IconButton color="primary" onClick={(e) => {
                                        e.preventDefault();
                                        complete(todo.id);
                                    }}>
                                        <Done />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={(e) => {
                                        e.preventDefault();
                                        remove(todo.id)
                                    }}>
                                        <Delete />
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </StyledBox>}
        </>
    );
}

export default PendingTodos;