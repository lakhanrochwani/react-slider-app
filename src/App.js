import React, { useState } from 'react';
import './style.css';
import Slide from './Slide';

export default function App() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: 'title 1',
      text: 'text 1',
    },
    {
      title: 'title 2',
      text: 'text 2',
    },
    {
      title: 'title 3',
      text: 'text 3',
    },
  ];

  return (
    <div>
      <button
        disabled={current === 0}
        onClick={() => {
          setCurrent(0);
        }}
      >
        Restart
      </button>
      <button
        disabled={current === 0}
        onClick={() => {
          setCurrent((prevState) => prevState - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={current === slides.length - 1}
        onClick={() => {
          setCurrent((prevState) => prevState + 1);
        }}
      >
        Next
      </button>
      <Slide title={slides[current].title} text={slides[current].text} />
    </div>
  );
}
