import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';  // Import your App component
import Shop from './page/Shop.jsx';  // Import other components
import Blogs from './componet/Blogs.jsx';

// Use window.onload to make sure the DOM is fully loaded before rendering
window.onload = () => {
  // Ensure you're targeting the correct element, which is 'root' (not 'App')
  const container = document.getElementById('root'); // Correct ID is 'root'
  console.log(container);  // Check if it prints a DOM element or null

  if (container) {
    // Create a React root container and render the app
    const root = createRoot(container);
    root.render(
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </Router>
    );
  } else {
    console.error("No element with id 'root' found!");  // Update the error message to match the correct ID
  }
};
