import {useContext} from "react";
import Form from "./Components/Form.js";
import List from "./Components/List.js";
import { ApiContext } from "./Components/ApiContext.js";
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
type ApiContextType = {
    items: ItemType[] | null,
    loading: boolean,
    getItem: (id: number) => void,
    deleteItem: (id: number) => void,
    selectedItem: ItemType | null,
}

export default function App() {
    const { loading } = useContext(ApiContext) as ApiContextType;


  return (
   
    <div className="container">
      
         {loading ? 
         <div className="animation-container">
          <Hourglass
            size="50"
            bgOpacity="0.1"
            speed="1.75"
            color="#333446"/>
         </div>
          
          : <List/>
          }
       <Form/>
    </div>
  );
}
