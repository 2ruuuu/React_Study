import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import Button from "@/components/Button";
import sizeReviewLabels from "@/lib/sizeReviewLabels";
import styles from "./SizeReviewForm.module.css";
import {submitSizeReview} from "@/lib/actions";

const defaultFormValue = {
  size: "M",
  sex: "male",
  height: 173,
  fit: "good",
};

export default function SizeReviewForm({product}) {
  return (
    <form className={styles.sizeForm} action={submitSizeReview}>
      <input type="hidden" name="productId" value={product.id} />
      <label className={styles.label}>
        사이즈
        <Dropdown
          className={styles.input}
          name="size"
          defaultValue={defaultFormValue.size}
          options={[
            {label: "S", value: "S"},
            {label: "M", value: "M"},
            {label: "L", value: "L"},
            {label: "XL", value: "XL"},
          ]}
          required
        />
      </label>
      <label className={styles.label}>
        성별
        <Dropdown
          className={styles.input}
          name="sex"
          defaultValue={defaultFormValue.sex}
          options={[
            {label: sizeReviewLabels.sex["male"], value: "male"},
            {label: sizeReviewLabels.sex["female"], value: "female"},
          ]}
          required
        />
      </label>
      <label className={styles.label}>
        키
        <Input
          className={styles.input}
          name="height"
          min="50"
          max="200"
          type="number"
          defaultValue={defaultFormValue.height}
          required
        />
      </label>
      <label className={styles.label}>
        사이즈 추천
        <Dropdown
          className={styles.input}
          name="fit"
          defaultValue={defaultFormValue.fit}
          options={[
            {label: sizeReviewLabels.fit["small"], value: "small"},
            {label: sizeReviewLabels.fit["good"], value: "good"},
            {label: sizeReviewLabels.fit["big"], value: "big"},
          ]}
          required
        />
      </label>
      <Button className={styles.submit}>작성하기</Button>
    </form>
  );
}
