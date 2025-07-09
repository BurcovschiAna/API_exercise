import { useContext } from "react"; // Import necessary hooks from React
import { ApiContext, type ApiContextType } from "./ApiContext.js"; // Import the API context and types

// Define the List component
export default function List() {
    // Use the context to access items, getItem, deleteItem, and selectedItem from ApiContext
    const { items, getItem, deleteItem, selectedItem } = useContext(ApiContext) as ApiContextType;

    // Render the list of items and the selected item details
    return (
        <div className="flex">
            <div>
                {/* Map through the items and render each item */}
                {items?.map(item => (
                    <div className="item flex" key={item.id}>
                        <p className="title">
                            {item.title} {/* Display the item's title */}
                        </p>
                        <div className="flex">
                            {/* Button to view the item details */}
                            <div 
                                className="btn"
                                onClick={() => getItem(item.id)} >
                                <a href="#">
                                    View
                                </a>
                            </div>
                            {/* Button to delete the item */}
                            <div 
                                className="btn"
                                onClick={() => deleteItem(item.id)}
                            >
                                Delete
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="selected-item-container">
                {/* Render details of the selected item if available */}
                {selectedItem ? 
                    <div className="selected-item">
                        <img src={selectedItem.image} alt="" /> {/* Display the selected item's image */}
                        <p>
                            {selectedItem.title} {/* Display the selected item's title */}
                        </p>
                        <p>
                            {selectedItem.description} {/* Display the selected item's description */}
                        </p>
                        <div className="btn">
                            Price: {selectedItem.price} {/* Display the selected item's price */}
                        </div>
                    </div>
                : 
                    <div>
                        No item selected {/* Message when no item is selected */}
                    </div>
                }
            </div>
        </div>
    );
}
