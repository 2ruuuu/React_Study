import SearchForm from "./components/SearchForm";

export default function MovieListLayout({children}) {
  return (
    <div>
      <SearchForm />
      <div>{children}</div>
    </div>
  );
}
