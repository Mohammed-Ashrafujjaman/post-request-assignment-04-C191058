import React from 'react'
import ListTitle from './ListTitle'
import UnorederList from './UnorederList'

function BothIncomeExpanseList() {
    return (
        <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
            <div>
                <ListTitle color="text-green-600" innerText='Income' />
                <UnorederList
                    id="income-list"
                    data={[
                        {desc: "Website project", money:"+11,999.99"},
                        {desc: "Salary", money: "+35,000.00"},
                        {desc: "Mobile app project", money:"+10,000.00"}
                    ]}
                    color="text-green-600"
                    />
            </div>

            <div>
                <ListTitle color="text-red-600" innerText='Expense' />
                <UnorederList
                    id="expense-list"
                    data={[
                        {desc: "Groceries 1", money:"-2,500.00"},
                        {desc: "Electricity Bill", money: "-2,500.00"},
                        {desc: "House rent", money:"-2,500.00"},
                        {desc: "Phone bill", money:"-2,500.00"},
                        {desc: "1 Week Travel", money:"-2,500.00"}
                    ]}
                    color="text-red-600"
                    />
            </div>
        </div>
    )
}

export default BothIncomeExpanseList