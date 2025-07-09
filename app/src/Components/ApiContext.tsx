import { createContext, useState, useEffect, type ReactNode } from "react";

// Define the structure for an item
export type ItemType = {
  id: number,            // Unique identifier for the item
  title: string,        // Title of the item
  price: number,        // Price of the item
  description: string,  // Description of the item
  image: string,        // URL of the item's image
};

// Define the structure for the API context
export type ApiContextType = {
    items: ItemType[] | null,  // Array of items or null if not loaded
    loading: boolean,           // Loading state to indicate if data is being fetched
    getItem: (id: number) => void,   // Function to retrieve a specific item by ID
    deleteItem: (id: number) => void, // Function to delete an item by ID
    addItem: (newItem: ItemType) => void, // Function to add a new item
    selectedItem: ItemType | null, // Currently selected item or null
}

// Create the context with an initial value of null
export const ApiContext = createContext<ApiContextType | null>(null);

// Create a provider component for the API context
export const ApiProvider = ({ children }: { children: ReactNode }) => {
    // State to hold the items fetched from the API
    const [items, setItems] = useState<ItemType[] | null>(null);
    // State to hold a new item being added
    const [newItem, setNewItem] = useState<ItemType | null>(null);
    // State to indicate if data is being loaded
    const [loading, setLoading] = useState<boolean>(true);
    // State to hold the currently selected item
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
    
    // Function to fetch items from the API
    const fetchItems = () => {
        fetch('https://fakestoreapi.com/products') // Fetch from the mock API
        .then(response => response.json()) // Parse the JSON response
        .then(json => {
            setItems(json); // Set the items state with the fetched data
            setLoading(false); // Update loading state to false
        })
        .catch(error => {
            console.error("Error fetching data:", error); // Log any errors
        });
    };

    // useEffect to fetch items when the component mounts
    useEffect(() => {
        fetchItems(); // Call the fetch function
    }, []); // Empty dependency array to run only once on mount

    // Function to get a specific item by ID
    const getItem = (id: number) => {
        const item = items?.find(item => item.id === id) || null; // Find the item
        setSelectedItem(item); // Set the selected item state
    };

    // Function to delete an item by ID
    const deleteItem = (id: number) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE", // Specify the DELETE method
        })
        .then(response => {
            if (response.ok) { // Check if the response is successful
                // Update the items state by filtering out the deleted item
                setItems(prevItems => prevItems ? prevItems.filter(item => item.id !== id) : null);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error); // Log any errors
        });
    };

    // Function to add a new item
    const addItem = (newItem: ItemType) => {
        fetch('https://fakestoreapi.com/products', {
            method: "POST", // Specify the POST method
            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            },
            body: JSON.stringify({ ...newItem }), // Convert the new item to JSON
        })
        .then(response => {
            if (!response.ok) { // Check if the response is not okay
                throw new Error('Network response was not ok'); // Throw an error
            }
            // Update the items state by adding the new item
            setItems(prevItems => prevItems ? [...prevItems, newItem] : [newItem]); 
            setNewItem(null); // Reset the newItem state
            return response.json(); // Parse the response as JSON
        })
        .catch(error => {
            console.error("Error fetching data:", error); // Log any errors
        });
    };

    // Provide the context value to child components
    return (
        <ApiContext.Provider value={{ items, loading, getItem, deleteItem, addItem, selectedItem }}>
            {children}
        </ApiContext.Provider>
    );
}
