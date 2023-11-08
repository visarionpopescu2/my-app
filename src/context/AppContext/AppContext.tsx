import React from 'react';
import { APP_STATE } from "types";

const initialState: APP_STATE = {
  user: undefined,
  articles: [],
  setArticles: () => {}
}

const AppContext = React.createContext(initialState);

export default AppContext
