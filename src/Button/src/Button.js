import React, {useState, useEffect} from 'react';
import './button.scss';

const Button = props => {

    const { type, shape } = props

const [hovered, setHovered ] = useState(false)

useEffect(() => {
    console.log(hovered)
}, [hovered])

return (
<button type="button"  onMouseEnter={() => setHovered(!hovered)} className={`btn btn-${type} btn-${shape}`} onClick={props.onClick}>{props.children}</button>
)

}

export default Button;