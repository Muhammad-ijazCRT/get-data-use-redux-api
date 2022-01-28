import {getUsers} from './App/Reducer/action/UserAction'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers());
  });

  
  return (
    <>
    <h1>THids is my home page</h1>
    </>
  );
}

export default App;
