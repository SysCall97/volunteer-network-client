import React from 'react';
import './App.css';
import View from './components/View/View';
import 'bootstrap/dist/css/bootstrap.min.css';

export const userContext = React.createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = React.useState({});
  return (
    <userContext.Provider
      value={
        {
          user: [loggedinUser, setLoggedinUser]
        }
      }>
      <View />
    </userContext.Provider>
  );
}

export default App;
