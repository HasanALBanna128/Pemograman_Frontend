import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  const addAngka = () => {
    setAngka((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Lifecycle: Component dimount/update, angka =", angka);
    document.title = `Result: ${angka}`;
  }, [angka]);

  console.log("Lifecycle: Component dirender");

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Counter</h2>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
