import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContex';
import { Card } from './Card';

interface ColumnProps {
  title: string;
  index: number;
}

export const Column = ({ title, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map(({ text, id }) => (
        <Card text={text} key={id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        isDark
      />
    </ColumnContainer>
  );
};
