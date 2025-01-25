import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiaryEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/entries')
      .then(response => setEntries(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Diary Entries</h1>
      {entries.map(entry => (
        <div key={entry.id}>
          <h2>{entry.title}</h2>
          <p>{entry.content}</p>
          <small>{entry.created_at}</small>
        </div>
      ))}
    </div>
  );
};

export default DiaryEntries;
