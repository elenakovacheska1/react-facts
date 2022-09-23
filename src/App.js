import './App.css';
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [dark, setDark] = React.useState(true);
  if (dark){ 
    import('./App.css');
    console.log("dark");
  }else{
    import('./App_light.css');
    console.log("light");
  }

  let toggleDarkMode = () => {
        setDark(prevVal => (!prevVal));
    }

  return (
    <div className="container">
      <Navbar dark={dark} toggleDarkMode={toggleDarkMode} />
      <Main dark={dark} />
    </div>
  );
}

export default App;
