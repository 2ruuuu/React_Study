import {useEffect, useRef} from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "./FoodForm.module.css";
import FileInput from "./FileInput";

function FoodForm({
  initialValue = {
    title: "",
    calorie: "",
    content: "",
  },
  onSubmit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} action={onSubmit}>
      <div className={styles.container}>
        <FileInput name="imgFile" initialPreview={initialValue.imgUrl} />
        <div className={styles.inputContainer}>
          <div className={styles.titleContainer}>
            <Input
              className={styles.title}
              name="title"
              ref={inputRef}
              defaultValue={initialValue.title}
              placeholder="음식 이름"
            />
            <Input
              className={styles.calorie}
              name="calorie"
              type="number"
              defaultValue={initialValue.calorie}
              placeholder="칼로리 (KCal)"
            />
          </div>
          <Textarea
            className={styles.content}
            name="content"
            defaultValue={initialValue.content}
            placeholder="내용을 작성해 주세요."
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button>작성</Button>
      </div>
    </form>
  );
}

export default FoodForm;
