import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useEffect, useState } from "react";

type Slip = {
  slip: {
    id: number;
    advice: string;
  };
};

function App() {
  const [advice, setAdvice] = useState<Slip>({
    slip: { id: 0, advice: "Try to click the dice" },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleClick();
  }, []);

  function handleClick() {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
        setLoading(false);
      });
  }

  return (
    <main>
      {loading ? (
        <h1>Loading...</h1>
      ) : advice.slip ? (
        <h1>Advice # {advice.slip.id}</h1>
      ) : (
        <h1> No advice available</h1>
      )}

      {loading ? (
        <p>Loading advice...</p>
      ) : advice.slip ? (
        <q>{advice.slip.advice}</q>
      ) : (
        <p>Try another time</p>
      )}

      <img src={dividerMobile} alt="" className="mobile" />
      <img src={dividerDesktop} alt="" className="desktop" />

      <button onClick={handleClick}>
        <img src={dice} alt="" />
      </button>
    </main>
  );
}

export default App;
