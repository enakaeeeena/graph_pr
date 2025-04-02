import { useState } from 'react';

const Buttons = ({ count = 3 }) => {
  const [counters, setCounters] = useState<number[]>(Array(count).fill(0));
  const [lastClicked, setLastClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
    setLastClicked(index);
  };

  return (
    <div className="buttons-container my-4">
      <h2>Задание 1</h2>
      <div className="d-flex flex-wrap">
        {counters.map((counter, index) => (
          <button
            key={index}
            className={`btn btn-primary m-2 ${lastClicked === index ? 'btn-success' : ''}`}
            onClick={() => handleClick(index)}
          >
            {counter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;