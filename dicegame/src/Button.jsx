import styles from "./Button.module.css";

const Button = ({color = "purple", children, func}) => {
  const classNames = `${styles.button} ${styles[color]}`;
  return (
    <button className={classNames} onClick={func}>
      {children}
    </button>
  );
};

export default Button;
