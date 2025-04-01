import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
