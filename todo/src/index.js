import React from 'react';
import ReactDOM from 'react-dom';

// const el = React.createElement('h1',null, 'Hello world!!')
// то же самое что и ниже, но сверху js, а снизу jsx
// const el = <h1>Hello world</h1>
// jsx создаёт легковесный объекты, содежа в себе не много свойств

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder='search'></input>;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
