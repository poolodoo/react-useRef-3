import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  // the ref that will connect to input field
  const nameRef = useRef();

  // form submit handler
  const onSubmit = (e) => {
    e.preventDefault();

    console.log({
      // every ref will ALWAYS have the "current" property, which is the HTML DOM element
      userName: nameRef.current.value
    });
  }
  return (
    <div>
      <h2>Forms and Input Fields in React with useRef</h2>
      <form onSubmit={onSubmit}>
        <input id="name" ref={nameRef} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};