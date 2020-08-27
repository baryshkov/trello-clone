import React, { createContext, useContext } from 'react';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
};

type Action =
  | { type: 'ADD_LIST'; payload: string }
  | { type: 'ADD_TASK'; payload: { text: string; taskId: string } };

interface AppStateContextProps {
  state: AppState;
}

export const appStateReducer = (action: Action, state: AppState): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return { ...state };
    }
    case 'ADD_TASK': {
      return { ...state };
    }
    default:
      return state;
  }
};

const AppStateContex = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
);

export const AppStateProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <AppStateContex.Provider value={{ state: appData }}>
      {children}
    </AppStateContex.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContex);
};
