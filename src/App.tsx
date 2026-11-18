import { useState } from 'react';
import './App.css';

function App() {
  type Todo = {
    id: number;
    text: string;
    done: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'React復習', done: false },
    { id: 2, text: 'TypeScript復習', done: true },
  ]);

  const [text, setText] = useState('');

  function addTodo() {
    if (text.trim() === '') {
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: Math.max(...prev.map((product) => product.id), 0) + 1,
        text: text,
        done: false,
      },
    ]);
    setText('');
  }

  function toggledDone(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  return (
    <>
      <section id="center">
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={addTodo} disabled={text.trim() === ''}>
          追加
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => toggledDone(todo.id)}>
              {todo.done ? '✅' : '⬜'} {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
