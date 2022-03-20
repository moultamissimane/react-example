import React, { useEffect, useState } from 'react'

export const Todo = ({ text, id, isChecked, setCount, count }) => {

    const [checked, setChecked] = useState(isChecked)

    useEffect(() => {
        if (checked) {
            console.log(checked);
            setCount(count+1)
        } else {
            setCount(count-1)
        }
    }, [checked])



    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} id={id} />
            <label htmlFor={id}>
                <h3>{text}</h3>
            </label>
        </div>
    )
}
