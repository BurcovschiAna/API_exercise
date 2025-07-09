# Api Exercise
<h1>Item Management Application</h1>

<p>This project is a simple React-based application that allows users to manage items. Users can add, view, and delete items, with data fetched from a mock API. The application is designed to demonstrate the use of React Context for state management and the integration of forms and lists.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#how-to-run-the-project">How to Run the Project</a></li>
    <li><a href="#usage">Usage</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
    <li><strong>Fetch Items</strong>: Automatically fetches items from a mock API on load.</li>
    <li><strong>Add Item</strong>: Users can add new items through a form.</li>
    <li><strong>View Item</strong>: Users can click on an item to view its details.</li>
    <li><strong>Delete Item</strong>: Users can delete items from the list.</li>
    <li><strong>Loading State</strong>: Displays a loading animation while fetching data.</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
    <li><strong>React</strong>: JavaScript library for building user interfaces.</li>
    <li><strong>TypeScript</strong>: TypeScript is used for type safety.</li>
    <li><strong>Context API</strong>: For state management across components.</li>
    <li><strong>CSS</strong>: For styling the application.</li>
</ul>

<h2 id="project-structure">Project Structure</h2>
<pre>
/src
├── /Components
│   ├── ApiContext.js       // Context to manage API data and state
│   ├── Form.js             // Component for adding new items
│   └── List.js             // Component for displaying items
├── App.js                  // Main application component
└── App.css                 // Styles for the application
</pre>

<h3>Component Breakdown</h3>
<ul>
    <li><strong>ApiContext.js</strong>: 
        <ul>
            <li>Contains the context and provider for managing the state of items, loading status, and selected item.</li>
            <li>Fetches items from the API and provides methods to get, add, and delete items.</li>
        </ul>
    </li>
    <li><strong>Form.js</strong>: 
        <ul>
            <li>A form component that allows users to input details for a new item.</li>
            <li>Handles form submission and updates the context with the new item.</li>
        </ul>
    </li>
    <li><strong>List.js</strong>: 
        <ul>
            <li>Displays a list of items fetched from the API.</li>
            <li>Provides buttons to view item details and delete items.</li>
        </ul>
    </li>
    <li><strong>App.js</strong>: 
        <ul>
            <li>The main component that renders the <code>Form</code> and <code>List</code> components.</li>
            <li>Manages loading state to show a loading animation while data is being fetched.</li>
        </ul>
    </li>
</ul>

<h2 id="how-to-run-the-project">How to Run the Project</h2>
<ol>
    <li><strong>Clone the Repository</strong>:
        <pre><code>git clone https://github.com/BurcovschiAna/API_exercise.git
cd app</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>:
        Make sure you have Node.js installed. Then run:
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the Application</strong>:
        After installing the dependencies, start the application with:
        <pre><code>npm run dev</code></pre>
        This will start the development server and open the application in your default web browser.
    </li>
</ol>

<h2 id="usage">Usage</h2>
<ol>
    <li><strong>Add Items</strong>:
        <ul>
            <li>Fill out the form with the item title, price, image URL, and description.</li>
            <li>Click the "Submit" button to add the item to the list.</li>
        </ul>
    </li>
    <li><strong>View Items</strong>:
        <ul>
            <li>Click the "View" button next to any item to see its details on the right side of the screen.</li>
        </ul>
    </li>
    <li><strong>Delete Items</strong>:
        <ul>
            <li>Click the "Delete" button next to any item to remove it from the list.</li>
        </ul>
    </li>
    <li><strong>Loading State</strong>:
        <ul>
            <li>While items are being fetched, a loading animation will be displayed.</li>
        </ul>
    </li>
</ol>

