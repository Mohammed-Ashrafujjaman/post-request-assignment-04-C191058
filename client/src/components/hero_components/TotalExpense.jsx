import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TotalExpanse() {

    const [expense, setExpense] = useState("3,391.45");

    useEffect(() => {
        axios.post('http://localhost:3000/budget/expense', {
            ammount: 2000,
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);

          });
        
        axios.get('http://localhost:3000/budget/expense').then((response) =>{
            setExpense(response.data);
        })
    }, [])

    return (
        <div
            className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
            <span>Expenses</span>
            <p>- BDT <span id="total-expense">{expense}</span></p>
        </div>
    )
}

export default TotalExpanse