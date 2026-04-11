import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import style from "./SearchBarLayout.module.css";

const SearchBarLayout = ({children}: {children: ReactNode}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const q = router.query.q as string;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit} type="button">
          검색
        </button>
      </div>
      {children}
    </div>
  );
};

export default SearchBarLayout;
