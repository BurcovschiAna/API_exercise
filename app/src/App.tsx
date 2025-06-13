import { useState, useEffect, use } from "react";
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'
import "./App.css"
type ItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function App() {
  const [items, setItems] = useState<ItemType[] | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [newItem, setNewItem] = useState<[] | null>(null);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null)

  const fetchItems = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        setItems(json);
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []); 
  const getItem = (id:number) => {
     const item = items?.find(item => item.id === id) || null;
     setSelectedItem(item);
  }
  const deleteItem = (id:number) => {

  }
  return (
    <div className="container">
      <form className="form-container">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <div className="flex">
         {loading ? 
          <Hourglass
            size="50"
            bgOpacity="0.1"
            speed="1.75"
            color="#333446"/>
          : 
          <div>
            {
              items?.map(item => (
              <div className="item flex" key={item.id}>
                <p className="title">
                  {item.title}
                </p>
                <div className="flex">
                  <div 
                  className="btn"
                  onClick={() => getItem(item.id)} >
                    <a href="#">
                      View
                    </a>
                    </div>
                  <div 
                  className="btn"
                  onClick={() => deleteItem(item.id)}
                  >Delete</div>
                </div>
              </div>
          ))
            }
          </div>
         }
         <div className="selected-item-container">
            {selectedItem ? 
              <div className="selected-item">
                <img src={selectedItem.image} alt="" />
                <p>
                  {selectedItem.title}
                </p>
                <p>
                  {selectedItem.description}
                </p>
                <div className="btn">
                  Price: {selectedItem.price}
                </div>
              </div>
             : 
              <div>
                No item selected
              </div>
            }
         </div>
      </div>
      
      
    </div>
  );
}
