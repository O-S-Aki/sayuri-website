import { Route, Routes } from 'react-router-dom';
import { SinglePage } from './components';

import './app.css';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<SinglePage />}/>
      </Routes>

    </>
  )
}

export default App
