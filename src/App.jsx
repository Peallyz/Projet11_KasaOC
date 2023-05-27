import useFetch from "./hooks/useFetch";

function App() {
  const [data, loading] = useFetch("./src/data/data.json");
  console.log(data, loading);

  return (
    <div>
      <h1>React Hooks</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
