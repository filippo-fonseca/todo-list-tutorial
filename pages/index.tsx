import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value: string = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setTodoList([...todoList, value]);

    setValue("");
  };

  const handleDelete = (todo: string) => {
    const updatedArr: string[] = todoList.filter(
      (todoList) => todoList.indexOf(todoList) != todoList.indexOf(todo)
    );

    setTodoList(updatedArr);
  };

  console.log(todoList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Todo App</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} value={value} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todoList.length >= 1 ? (
            todoList.map((todo: string, idx: number) => {
              return (
                <div style={{ display: "flex" }}>
                  <li key={idx}>{todo}</li>
                  <button onClick={() => handleDelete(todo)}>Delete</button>
                </div>
              );
            })
          ) : (
            <p>🎉 Congratulations! You have no todos remaining.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
