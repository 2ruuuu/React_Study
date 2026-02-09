import Dice from "./Dice";
import styles from "./Board.module.css";

const Board = ({name, color, gameHistory, isLoser}) => {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const boardClassNames = `${styles.container} ${isLoser ? styles.loser : ""}`;

  return (
    <div className={boardClassNames}>
      <div className={styles.diceContainer}>
        {" "}
        <h2 className={styles.title}>{name}</h2>
        <Dice color={color} num={num} />
      </div>

      <h3 className={styles.sumScore}>
        {sum}
        <span>점</span>
      </h3>
      <div className={styles.history}> {gameHistory.join(", ")}</div>
    </div>
  );
};

export default Board;
