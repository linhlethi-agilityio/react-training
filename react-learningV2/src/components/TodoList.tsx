import { PERSON, TODOS } from '@constants/baseConfig';
import { useState } from 'react';
import { ListItem } from './ListItem';

const TodoList = () => {
  const [itemActive, setItemActive] = useState(false);

  const today = new Date();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  };

  return (
    <div style={PERSON.theme}>
      <h1>To Do List for {formatDate(today)}</h1>
      <h2>{PERSON.name}'s Todos</h2>
      <img src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamarr' className='photo' />
      <ul>
        {TODOS.map((item) => (
          <ListItem key={item.id} active={itemActive}>
            {item.name}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export { TodoList };
