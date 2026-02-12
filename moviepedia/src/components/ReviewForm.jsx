import {useEffect, useRef} from "react";
import Button from "./Button";

const ReviewForm = ({
  review = {
    title: "",
    imgUrl: "",
    rating: 1,
    content: "",
  },
  onSubmit,
}) => {
  const firstInputRef = useRef(null);
  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <form action={submit}>
      <input
        name="title"
        defaultValue={review.title}
        placeholder="제목을 입력하세요."
        ref={firstInputRef}
      />
      <select name="rating" defaultValue={review.rating}>
        <option value={1}>*</option>
        <option value={2}>**</option>
        <option value={3}>***</option>
        <option value={4}>****</option>
        <option value={5}>*****</option>
      </select>
      <textarea
        name="content"
        defaultValue={review.content}
        placeholder="내용을 입력해 주세요."
      />
      <Button>작성완료</Button>
    </form>
  );
};

export default ReviewForm;
