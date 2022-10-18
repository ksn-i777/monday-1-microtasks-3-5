import React from "react";

type TableType = {
    state: Array<ElementType>
}
type ElementType = {
    banknots: string,
    value: number,
    number: string,
}

export function Table(props: TableType) {
    return (
        <div>
            <ul>
                {props.state.map((el)=>{
                    return <li>
                        <span>{el.banknots} - </span>
                        <span>{el.value} - </span>
                        <span>{el.number}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}
