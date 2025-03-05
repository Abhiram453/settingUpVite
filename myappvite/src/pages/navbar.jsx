import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
};

export default App;
