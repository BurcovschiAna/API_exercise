import { useContext } from "react"; // Import necessary hooks from React
import Form from "./Components/Form.js"; // Import the Form component
import List from "./Components/List.js"; // Import the List component
import { ApiContext, type ApiContextType } from "./Components/ApiContext.js"; // Import the API context
import { Hourglass } from 'ldrs/react'; // Import the Hourglass component for loading animation
import 'ldrs/react/Hourglass.css'; // Import CSS for the Hourglass component
import "./App.css"; // Import custom styles for the App component


// Define the main App component
export default function App() {
    // Use the context to access the loading state
    const { loading } = useContext(ApiContext) as ApiContextType;

    return (
        <div className="container">
            {/* Conditional rendering based on loading state */}
            {loading ? 
                <div className="animation-container">
                    <Hourglass
                        size="50" // Size of the hourglass
                        bgOpacity="0.1" // Background opacity
                        speed="1.75" // Animation speed
                        color="#333446" // Color of the hourglass
                    />
                </div>
                : <List/> // Render the List component when not loading
            }
            <Form/> {/* Always render the Form component */}
        </div>
    );
}
