import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import classNames from "classnames/bind";
import style from "./Tenzies.module.scss";

import Die from "./Die";

const cx = classNames.bind(style);

function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld === true);

    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  // Helper Function :
  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));
  return (
    <main>
      {tenzies === true && <Confetti />}
      <p className={cx("instructions")}>
        Luật chơi: Tung xúc xắc cho tất cả bằng nhau . Ấn vào viên xúc xắc để
        giữ nguyên giá trị bạn muốn.
      </p>
      <div className={cx("dice-container")}>{diceElement}</div>

      <button onClick={rollDice} className={cx("roll-dice")}>
        {tenzies === true ? "Game mới" : "Tung và Tung"}
      </button>
    </main>
  );
}

export default App;
