import React from 'react';
import { 
  GlobalStyles,
  Container,
  Title
} from './styles/app.styles';
import AddTodo from './components/addTodo';
import DoneTodos from './components/doneTodos';
import PendingTodos from './components/pendingTodos';
import { useTodoActions, useTodoActionsRV } from './apollo/customHooks';

const App = () => {

  const {
    todosData,
    add,
    complete,
    remove,
    todo,
    setTodo
  } = useTodoActions();

  return (
    <>
      <GlobalStyles/>
      <Container>
        <Title>todo</Title>
        <AddTodo todo={todo} add={add} setTodo={setTodo} />
        <PendingTodos todosData={todosData} complete={complete} remove={remove} />
        <DoneTodos todosData={todosData} remove={remove} />
      </Container>
    </>
  );
}

export default App;
