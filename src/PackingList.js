import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onEraseList }) {
  const [sortBy, setSortyBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => (a.packed ? 1 : 0) - (b.packed ? 1 : 0));
  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onEraseList={onEraseList} key={item.id} />)}

      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortyBy(e.target.value)}>
          <option value='input'>
            sort by input order
          </option>
          <option value='description'>
            sort by description
          </option>
          <option value='packed'>
            sort by packed
          </option>
        </select>
        <button onClick={() => onEraseList()}>Clear List</button>

      </div>
    </div>
  );

}

