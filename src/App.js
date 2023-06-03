import './App.css';
import Table from './Table';

function App() {

  const people = [
    // ["F", "U", 32],
    // ["I", "R", 21],
    // ["G", "T", 31],
    // ["D", "W", 89],
    // ["E", "V", 10],
    // ["B", "Y", 42],
    // ["A", "Z", 41],
    // ["C", "X", 12],
    // ["H", "S", 56],
  ];

  const headers = ["FirstName", "LastName", "Age"];

  return (
    <div className="App">
      <Table items={people} headers={headers} />
    </div>
  );
}

export default App;
