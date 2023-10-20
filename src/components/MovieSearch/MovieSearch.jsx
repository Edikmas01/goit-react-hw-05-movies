export const MovieSearch = ({ query, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      value={query}
      type="text"
      name="search"
      onChange={e => onChange(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>
);
