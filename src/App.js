import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부하자.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부하자.",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 제목 추가
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 추가
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가 버튼 클릭
  const clickAddButtonHandler = (event) => {
    // 이거 뭐 방지하는 거였는데,, 조금있다 확인하자
    event.preventDefault();
    const newTodos = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
    setBody("");
  };

  // 삭제
  const clickRemoveHandler = (id) => {
    const newTodo = todos.filter((todos) => todos.id !== id);
    setTodos(newTodo);
  };

  // 조건에 따른 버튼(삭제, 완료) 클릭
  const clickifButtonHandler = (id) => {
    const ifButton = todos.map((todos) => {
      if (todos.id === id) {
        return { ...todos, isDone: !todos.isDone };
      } else return { ...todos };
    });
    setTodos(ifButton);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form" onSubmit={clickAddButtonHandler}>
        <div className="input-group">
          <label className="from-label">제목</label>{" "}
          <input
            className="add-input"
            value={title}
            onChange={titleChangeHandler}
          />
          <label className="from-label">내용</label>{" "}
          <input
            className="add-input"
            value={body}
            onChange={bodyChangeHandler}
          />
        </div>
        <button type="submit" className="add-button">
          추가하기
        </button>
      </form>
      <div className="list-container">
        <h2>Working!!!</h2>
        <div className="list-wrap">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <div
                  className="todo-container"
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  clickRemoveHandler={clickRemoveHandler}
                  clickifButtonHandler={clickifButtonHandler}
                >
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                  <div className="button-set">
                    <button
                      onClick={() => clickRemoveHandler(todo.id)}
                      className="red-button"
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => clickifButtonHandler(todo.id)}
                      className="green-button"
                    >
                      {todo.isDone ? "취 소" : "완 료"}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h2>Done!!!</h2>
        <div className="list-wrap">
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return (
                <div
                  className="todo-container"
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  clickRemoveHandler={clickRemoveHandler}
                  clickifButtonHandler={clickifButtonHandler}
                >
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                  <div className="button-set">
                    <button
                      onClick={() => clickRemoveHandler(todo.id)}
                      className="red-button"
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => clickifButtonHandler(todo.id)}
                      className="green-button"
                    >
                      {todo.isDone ? "취 소" : "완 료"}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
