import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800"></div>
      <h1 className="bg-gradient text-4xl py-8 mb-10 rounded">Expense Manager</h1>


        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graph></Graph>
        {/* Form */}
        <Form></Form>
        </div>
      </div>
  );
}

export default App;