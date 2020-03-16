/* eslint-disable */

import React, { useState, useEffect } from 'react'
import Item from './Item'
import fetch from '../Utils/fetch'

export default function List() {

   const url = "https://jsonplaceholder.typicode.com/posts"

    const [data, setData] = useState(['toto','titi'])

    useEffect(() => {
          fetch(url, setData)
    }, []);

    return (
        <div>
            {data.map((item, key) => <Item key = {key} {...item} />)}
        </div>
    )
}

