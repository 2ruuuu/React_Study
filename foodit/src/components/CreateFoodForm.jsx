const CreateFoodForm = ({onSubmit}) => {
  const submit = (formdata) => {
    const title = formdata.get("title");
    const calorie = formdata.get("calorie");
    const content = formdata.get("content");
    const data = {title, calorie, content};
    onSubmit(data);
  };

  return (
    <form action={submit}>
      <input name="title" placeholder="이름을 입력하세요."></input>
      <input name="calorie" type="number" placeholder="KCal"></input>
      <textarea name="content" placeholder="내용을 입력하세요."></textarea>
      <button>제출</button>
    </form>
  );
};
export default CreateFoodForm;
