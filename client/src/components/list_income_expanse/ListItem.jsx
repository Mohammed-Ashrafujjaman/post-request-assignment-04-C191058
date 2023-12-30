import React from 'react'

function ListItem(props) {
    return (
        <div className="group flex justify-between gap-2 text-sm p-1">
            <span>{props.description}</span>
            <div>
                <span className={props.color}>{props.money}</span>
                <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
                    Delete
                </span>
            </div>
        </div>
    )
}

export default ListItem