import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Todos from "./components/Todos";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Coffe", count: 1 },
    { title: "Breakfast", count: 1 },
  ]);

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]
    const indexedCountProperty = newTodos[index].count

    if (indexedCountProperty > 1) {
      // Selama jumlah count masih di atas 0
      // Bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // Kalo udah 0 dan masih dikurangin juga
      // Hapus array value dengan index yang sesuai
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const handleDeleteCount = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No blank List!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  return (
    <Container>
      <Header />
      <SearchInput
        onSubmit={handleSubmit}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Todos
        todos={todos}
        onSubstraction={(index) => handleSubstractionCount(index)}
        onAdditon={(index) => handleAdditionCount(index)}
        onDelete={(index) => handleDeleteCount(index)}
      />
    </Container>
  );
}

export default App;
