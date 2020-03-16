import React from 'react'

export default function Item({title, body}) {
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

