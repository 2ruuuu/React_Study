const CreateReviewForm = ({handleCreate}) => {
  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    handleCreate(data);
  };

  return (
    <form action={submit}>
      <input name="title" placeholder="제목을 입력하세요." />
      <select name="rating">
        <option value={1}>*</option>
        <option value={2}>**</option>
        <option value={3}>***</option>
        <option value={4}>****</option>
        <option value={5}>*****</option>
      </select>
      <textarea name="content" placeholder="내용을 입력해 주세요." />
      <button>작성완료</button>
    </form>
  );
};

export default CreateReviewForm;
