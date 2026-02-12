import {useEffect, useRef} from "react";

const EditFoodForm = ({item, onUpdate}) => {
  const inputRef = useRef(null);
  const submit = (formdata) => {
    const title = formdata.get("title");
    const calorie = formdata.get("calorie");
    const content = formdata.get("content");
    const data = {title, calorie, content};
    onUpdate(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form action={submit}>
      <input
        name="title"
        defaultValue={item.title}
        placeholder="이름을 입력하세요."
        ref={inputRef}
      ></input>
      <input
        name="calorie"
        defaultValue={item.calorie}
        type="number"
        placeholder="KCal"
      ></input>
      <textarea
        name="content"
        defaultValue={item.content}
        placeholder="내용을 입력하세요."
      ></textarea>
      <button>제출</button>
    </form>
  );
};
export default EditFoodForm;
