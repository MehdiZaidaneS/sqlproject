import React from "react"

const Statistic =({name,estadisticas}) =>{
    return(
            
        <tr>
        <th>{name}</th>
        <td>{estadisticas}</td>
        </tr>
        
    )
}

export default Statistic