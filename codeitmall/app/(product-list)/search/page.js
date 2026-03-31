const Search = async ({searchParams}) => {
  const {q} = await searchParams;
  return (
    <div>
      <h1>Search page</h1>
      <h3>{q}</h3>
    </div>
  );
};

export default Search;
