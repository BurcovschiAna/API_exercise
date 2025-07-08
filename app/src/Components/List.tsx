import { useContext } from "react";
import { ApiContext, type ApiContextType, type ItemType } from "./ApiContext.js";
export default function List(){
    const { items,  getItem, deleteItem, selectedItem } = useContext(ApiContext) as ApiContextType;
    return (
        <div className="flex">
            <div>
                {items?.map(item => (
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
                 ))}
            </div>
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
    )
} 