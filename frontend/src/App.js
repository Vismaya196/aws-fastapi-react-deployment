import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://fastapi-alb-409528555.eu-west-1.elb.amazonaws.com/')
      .then(response => response.json())
      .then(data => setMessage(data.Hello));
  }, []);

  return (
    <div>
      <header>
        <h1>Hello World from React!</h1>
        <h2>Message from API: {message}</h2>
      </header>
    </div>
  );
};

export default App;
