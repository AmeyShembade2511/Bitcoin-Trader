import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import React,{useState} from 'react'
import Table from './components/Table';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const [selectedOption1, setSelectedOption1] = useState('inr');
    const [selectedOption2, setSelectedOption2] = useState('slp');

    const handleDropdownChange1 = (event) => {
        console.log(event.target.value);
        setSelectedOption1(event.target.value);
    };

    const handleDropdownChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
  return (
    <div className="App">
        {/* <ThemeToggler/> */}
        <Navbar />
        <Dropdown handleDropdownChange1={handleDropdownChange1} handleDropdownChange2={handleDropdownChange2} selectedOption1={selectedOption1} 
        selectedOption2={selectedOption2} />
        <Table handleDropdownChange1={handleDropdownChange1} handleDropdownChange2={handleDropdownChange2} selectedOption1={selectedOption1} 
        selectedOption2={selectedOption2} />
    </div>
  );
}

export default App;
