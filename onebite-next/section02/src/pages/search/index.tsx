import SearchBarLayout from "@/components/SearchBarLayout";
import {useRouter} from "next/router";
import {ReactNode} from "react";

const Page = () => {
  const router = useRouter();
  const q = router.query.q;

  return <div>search page {q}</div>;
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};
