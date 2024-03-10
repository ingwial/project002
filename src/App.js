import "./App.css";

function returnRandomNumber() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const epoch = 21;
  const person = {
    name: "Wilfredo",
    age: 37,
  };
  return (
    <div>
      <h1>Title level 1</h1>
      <hr />
      <p>We are in epoch {epoch}</p>
      <h3>Access to object</h3>
      <p>
        {person.name} is {person.age} years old
      </p>
      <h3>call a function</h3>
      <p>Random value calling a function</p>
      {returnRandomNumber()}
    </div>
  );
}

export default App;
