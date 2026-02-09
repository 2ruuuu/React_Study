import {useState} from "react";
import Button from "./Button";
import Board from "./Board";
import styles from "./App.module.css";

const random = (n) => {
  return Math.ceil(Math.random() * n);
};

const App = () => {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    //기존 기록 gameHistory 뒤에 새로운 숫자 nextNum을 하나 붙여서 리스트를 갱신해라
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  const myNum = myHistory[myHistory.length - 1] || 1;
  const otherNum = otherHistory[otherHistory.length - 1] || 1;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>주사위 게임</h1>
        <Button color="purple" func={handleRollClick}>
          던지기
        </Button>
      </header>
      <hr className={styles.divider} />
      <h2 className={styles.subtitle}>경기 결과</h2>
      <div className={styles.boards}>
        <Board
          name="나"
          color="purple"
          gameHistory={myHistory}
          isLoser={myNum < otherNum}
        />
        <Board
          name="상대"
          color="red"
          gameHistory={otherHistory}
          isLoser={otherNum < myNum}
        />
      </div>
      <footer className={styles.resetButton}>
        <Button color="navy" func={handleClearClick}>
          처음부터
        </Button>
      </footer>
    </div>
  );
};

export default App;
