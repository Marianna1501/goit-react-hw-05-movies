import { useState } from 'react';


export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const queryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery('');
    if (query.trim() === '') {
      alert('write your query');
      return;
    }
    onSubmit(query.trim());
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={queryChange} />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
