import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TotalIncome() {
    const [income, setIncome] = useState("3,391.45");

    useEffect(() => {
        axios.post('http://localhost:3000/budget/income', {
            ammount: 5000,
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);

          });
        
        axios.get('http://localhost:3000/budget/income').then((response) =>{
            setIncome(response.data);
        })
    }, [])
    
    return (
        <div
            className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
            <p>Income</p>
            <p>+ BDT <span id="total-income">{income}</span></p>
        </div>
    )
}

export default TotalIncome