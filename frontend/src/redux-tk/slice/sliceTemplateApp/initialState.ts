export type TypeTabsList = {
  id: string; title: string, active?: boolean, content: Object
}

export interface IState {
  tabsList: TypeTabsList[];
  idActiveTab: string;
  loading: boolean;
}

export const initialState: IState = {
  tabsList: [{ id: '1', title: "Новая страница", active: true, content: { title: "Добро пожаловать в конструктор сайтов!" } }],
  idActiveTab: '1',
  loading: false
};


