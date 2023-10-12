import React from 'react';

const Button = ({onClick, children}) => {
    return <button onClick={onClick} style={{
        background: `var(--tg-theme-bg-color)`,
        color: `var(--tg-theme-text-color)`,
        border: "none",
        outline: "none",
        cursor: "pointer"

    }}>{children}</button>
}
 
export default Button 
