import { useState } from "react";
import  Logo  from "./Logo"
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";

function App() {
    const [items, setItem ] = useState([])

    function handleAddItems(item){
      setItem((items)=>[...items, item])
    }

    function handleDeleteItem(id){
      setItem((items)=>items.filter(item=>item.id !== id))
    }

    function handleToggleItem(id){
      setItem((items)=>items.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleDeleteList(){
      const message = window.confirm("Are you sure you want to delete")

     if (message) setItem([])
    }
  
  return (
  <div className="app">
  <Logo />
  <Form onAddItems={handleAddItems}/>
  <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onEraseList={handleDeleteList}/>
  <Stats items={items}/>
  </div>
  )
}

export default App;


