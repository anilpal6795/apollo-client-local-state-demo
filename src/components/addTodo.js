import React from 'react';
import { useBaseStyles, StyledBox } from '../styles/app.styles';
import { TextField } from '@material-ui/core';

const AddTodo = ({
    todo,
    add,
    setTodo
}) => {
    const classes = useBaseStyles();

    return (
        <StyledBox>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => {
                e.preventDefault();
                add();
                setTodo('');
            }}>
                <TextField value={todo} className={classes.textField} variant="outlined" label="Add Todo" onChange={(e) => {
                    setTodo(e.target.value);
                }}/>
            </form>
        </StyledBox>
    );
}

export default AddTodo;