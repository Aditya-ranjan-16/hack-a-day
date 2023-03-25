import React, { useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import axios from "axios";

const Home = React.lazy(() => import("./pages/Home"));
const ViewPdf = React.lazy(() => import("./pages/ViewPdf"));

function App() {


  return (
    <div className="App">
     <Router>
        <Routes>
        <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <Home />
              </Suspense>
            }
          />
           <Route
            path="/view"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <ViewPdf />
              </Suspense>
            }
          />
     
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
    </Router>
    </div>
  )
}

export default App
