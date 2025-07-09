import { useState, useContext } from "react"; // Import necessary hooks from React
import { ApiContext, type ApiContextType, type ItemType } from "./ApiContext.js"; // Import the API context and types

// Define the Form component
export default function Form() {
    // Use the context to access the addItem function from ApiContext
    const { addItem } = useContext(ApiContext) as ApiContextType;

    // State to hold the new item details
    const [newItem, setNewItem] = useState<ItemType>({
        id: Date.now(), // Use the current timestamp as a unique ID
        title: "", // Initial title is empty
        price: 0, // Initial price is 0
        description: "", // Initial description is empty
        image: "" // Initial image URL is empty
    });

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {        
        e.preventDefault(); // Prevent the default form submission behavior
        addItem(newItem); // Call the addItem function from context to add the new item
        // Reset the newItem state to initial values after submission
        setNewItem({ id: Date.now(), title: "", price: 0, description: "", image: "" });
    };

    // Handle input changes in the form
    const handleChange = (field: keyof ItemType) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Parse the value to a float if the field is "price", otherwise keep it as a string
        const value = field === "price" ? parseFloat(e.target.value) : e.target.value;
        // Update the newItem state with the changed field value
        setNewItem(prevData => ({
            ...prevData,
            [field]: value // Update the specific field in the newItem state
        }));
    };

    // Render the form
    return (
        <div className="form-container">
            <p>
                Complete the form to add new items
            </p>
            <form className="flex" onSubmit={handleSubmit}>
                <div>
                    <div className="input-item">
                        <label htmlFor="title">
                            Title
                        </label>
                        <input type="text" id="title" onChange={handleChange("title")} />
                    </div>
                    <div className="input-item">
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" id="price" onChange={handleChange("price")} />
                    </div>
                    <div className="input-item">
                        <label htmlFor="image">
                            Image URL
                        </label>
                        <input type="text" id="image" onChange={handleChange("image")} />
                    </div>
                </div>
                <div>
                    <div className="input-item">
                        <label htmlFor="description">
                            Description
                        </label>
                        <textarea id="description" onChange={handleChange("description")}></textarea>
                    </div>
                    <button className="btn">
                        Submit
                    </button> 
                </div>
            </form>
        </div>
    );
}
