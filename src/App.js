import React from 'react';
import Photo from './component/profile/ProfilePhoto'
import Fullname from './component/profile/FullName'
import Adresss from './component/profile/adress'
import './App.css';

function App() {
  return (
    <div className="App">
      <Photo></Photo>
      <Fullname></Fullname>
      <Adresss></Adresss>
    </div>
  );
}

export default App;
