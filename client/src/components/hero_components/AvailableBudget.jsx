import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AvailableBudget() {
    const [budget, setBudget] = useState("11,111.00");

    useEffect(() => {
        const fetchAvailableBudget = () => {
            try {
                axios.get("http://localhost:3000/budget")
                .then((response) => {
                    setBudget(response.data);
                });
                // console.log(availBudget.data);

            } catch (e) {
                console.log("Unable to fetch data.");
                console.log(e);
            }
        }

        fetchAvailableBudget()
    }, [])


    return (
        <div>
            <h2>Available Budget</h2>
            <p className="mt-1 text-4xl font-medium">+ BDT <span id="aval_budget">{budget}</span></p>
        </div>
    )
}

export default AvailableBudget