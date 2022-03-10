import React from "react"
import Contents from "./Contents"
import Header from "./Header"

const Phonebook= ({ phonebook }) =>(

    <div>
        <Header title ={phonebook.name}/>
        <Contents contacts={phonebook.contacts} />
    </div>

)
    


export default Phonebook