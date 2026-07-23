import Image from "next/image";
import todo from "@/assets/images/img-todoButton.png";
import done from "@/assets/images/img-doneButton.png";
import todoEmpty from "@/assets/images/img-todoEmpty-small.png";
import doneEmpty from "@/assets/images/img-doneEmpty-small.png";
import CheckList from "@/components/CheckList";
import {getItems} from "@/api/todoList";

const TodoList = async () => {
  const items = await getItems();

  const todos = items.filter((item) => !item.isCompleted);
  const dones = items.filter((item) => item.isCompleted);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Todo */}
      <section className="flex flex-col gap-4">
        <Image src={todo} alt="할 일 목록" width={101} height={36} />
        {todos.length === 0 ? (
          <div>
            <Image
              src={todoEmpty}
              alt="할 일이 없습니다."
              className="mx-auto mt-16 mb-6"
            />
            <p className="text-center text-slate-400">할 일이 없어요.</p>
            <p className="text-center text-slate-400">
              TODO를 새롭게 추가해주세요!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {[...todos].reverse().map((item) => (
              <CheckList key={item.id}>{item.name}</CheckList>
            ))}
          </div>
        )}
      </section>

      {/* Done */}
      <section className="flex flex-col gap-4">
        <Image src={done} alt="끝난 목록" width={101} height={36} />
        {dones.length === 0 ? (
          <div>
            <Image
              src={doneEmpty}
              alt="다 한 일이 없습니다."
              className="mx-auto mt-16 mb-6"
            />
            <p className="text-center text-slate-400">
              아직 다 한 일이 없어요.
            </p>
            <p className="text-center text-slate-400">
              해야 할 일을 체크해보세요!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {[...dones].reverse().map((item) => (
              <CheckList key={item.id} checked>
                {item.name}
              </CheckList>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TodoList;
