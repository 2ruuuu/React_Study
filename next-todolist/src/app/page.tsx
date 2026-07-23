import Button from "@/components/Button";
import Search from "@/components/Search";
import grayPlus from "@/assets/icons/ic-grayPlus.svg";
import Image from "next/image";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-center gap-4 mt-6 mb-10">
        <Search className="min-w-0 flex-1" />
        <Button icon={<Image src={grayPlus} alt="" width={16} height={16} />}>
          추가하기
        </Button>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
