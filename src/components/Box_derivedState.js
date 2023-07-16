import React from "react"

export default function BoxDerivedState(props) {
    
    const [on, setOn] = React.useState(props.on)

    function handleClick(e) {
        setOn(prevOn => !prevOn)
    }

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={handleClick}
        >
        </div>
    )
}