import React from 'react';
import { AppContainer } from './styles';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContex';

const App = () => {
  const { state } = useAppState();
  console.log(state);
  return (
    <AppContainer>
      {state.lists.map(({ id, text }, i) => (
        <Column title={text} key={id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
