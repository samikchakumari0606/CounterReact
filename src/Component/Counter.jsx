

import React from "react";
import styles from "./Counter.module.css";


function Counter(){
    const[count,setCount]=React.useState(0)
    return <div>
        <h1 className={styles.countText}>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>button</button>
    </div>
}

export default Counter;