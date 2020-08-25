import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';

interface ColumnProps {
  title: string;
}

export const Column = ({ title, children }: React.PropsWithChildren<ColumnProps>) => (
  <ColumnContainer>
    <ColumnTitle>{title}</ColumnTitle>
    {children}
    <AddNewItem
      toggleButtonText="+ Add another task"
      onAdd={console.log}
      isDark
    />
  </ColumnContainer>
);
