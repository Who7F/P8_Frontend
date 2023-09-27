import PageHeader from './components/PageHeader'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader />
	  <BrowserRouter>
	  <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/test" element={<HomePage />} />
				
	  </Routes>
	  </BrowserRouter>
	  
	  
    </div>
  );
}

export default App;
