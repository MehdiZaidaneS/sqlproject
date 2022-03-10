import React from "react"
import Entry from "./Entry"


const Contents= ( {contacts} ) => {
    
    const mapa = () => contacts.map (contact =>
        <Entry key ={contact.id} contact={contact}/>
        )

    return(
        <div>
           {mapa()}
           <p>Total number of entries: {contacts.length} </p>
        </div>
    )
}

export default Contents