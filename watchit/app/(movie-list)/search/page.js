export default async function Search({ searchParams }) {
  const { q } = await searchParams;

  return (
    <div>
      <h1>검색 페이지</h1>
      <div>검색어: {q}</div>
    </div>
  );
}
