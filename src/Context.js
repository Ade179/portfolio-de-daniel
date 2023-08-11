/* eslint-enable react/destructuring-assignment */
import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const themeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => { // Destructuring props here
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
      {' '}
      {/* Using destructured 'children' prop */}
    </themeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define the prop type and mark it as required

};
