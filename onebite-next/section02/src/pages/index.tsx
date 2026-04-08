import SearchBarLayout from "@/components/SearchBarLayout";
import style from "./index.module.css";
import {ReactNode} from "react";

const Home = () => {
  return (
    <>
      <h1 className={style.h1}>안녕 Next.js</h1>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
