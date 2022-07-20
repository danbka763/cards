import { useEffect } from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import { GET_CARDS } from './Store/types/cardsTypes';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_CARDS
    });
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
