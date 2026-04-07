import {useEffect, useRef, useState} from "react";
import Editor from "./components/Editor";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  //typescript는 초기값을 무조건 넣어줘야함
  // 초기값으로 넣을게 없다? useState<string>() 이런식으로 제네릭 값이라도 넣어야함
  // 하지만 <string> 이런식으로 주게 되면 string | undefined 유니온 타입으로 추론이 됨 그래서
  // 웬만하면 초기값을 넣어라
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([...todos, {id: idRef.current++, content: text}]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
