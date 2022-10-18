import React from 'react';

type ButtonType = {
    name: 'ALL' | 'USD' | 'RUB',
    action: ()=>void,
}

export function Button(props: ButtonType) {
    return <button onClick={props.action}>{props.name}</button>
}