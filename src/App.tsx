import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";

function App() {
  function handleClick() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <main>
      <h1>Advice # XXX</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, magni,
        rerum vitae fuga autem eum quo illo voluptatem non voluptatibus
        inventore, odit molestiae alias? Perspiciatis commodi quo atque est
        quos.
      </p>
      <img src={dividerMobile} alt="" />

      <button onClick={handleClick}>
        <img src={dice} alt="" />
      </button>
    </main>
  );
}

export default App;
