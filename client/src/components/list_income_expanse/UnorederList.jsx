import React from 'react'
import ListItem from './ListItem'

function UnorederList(props) {
    const data = props.data
    return (
        <div>
            <ul id={props.id} className="divide-y">
                {data.map((item) => (
                    <ListItem
                        description={item.desc}
                        color={props.color}
                        money={item.money}
                    />
                ))}
            </ul>
        </div>
    )
}
export default UnorederList