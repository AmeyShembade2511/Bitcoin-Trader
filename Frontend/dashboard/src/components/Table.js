import React from 'react'
import { useState,useEffect } from 'react';
export default function Table(props) {
    const handleDropdownChange1=props.handleDropdownChange1;
    const handleDropdownChange2=props.handleDropdownChange2;
    const selectedOption1=props.selectedOption1;
    const selectedOption2=props.selectedOption2;
    const [data, setTableData] = useState([]);
    const [columns, setTableColumns] = useState([]);

    useEffect(() => {
        // Fetch data and columns from your backend
        // For example, you might fetch them using the Fetch API or Axios
        // Update the state with the fetched data and columns
        const fetchData = async () => {
            
            try {
                const response=await fetch("http://localhost:5000/fetch-and-insert",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({selectedOption1,selectedOption2})
                });
                console.log(selectedOption1," ",selectedOption2);
                const { col, r } = await response.json();
                
                setTableColumns(col);
                setTableData(r);
                console.log(col);
                console.log(r);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedOption1,selectedOption2]);
  return (
    <div>
        {columns ? <table className="table">
            <thead>
                <tr>
                {columns.map((columnName, index) => (
                    <th key={index}>{columnName}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data && data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((columnName, colIndex) => (
                    <td key={colIndex}>{row[columnName]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
        :
         <h1>Internal Server Error</h1>
        }
    </div>
  )
}
