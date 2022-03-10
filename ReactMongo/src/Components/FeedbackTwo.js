import React from "react"
import Button from "./Button"
import Statics from "./Statics"
import Statistic from "./Statistic"

class FeedBackTwo extends React.Component{
      
    constructor(){
        super()
        this.state = {
            counterHy: 0,
            counterNe: 0,
            counterHu: 0,
            value: 0
        }
    }
    
    keskiarvo =() =>{
        const keskiarvo = ((this.state.counterHy - this.state.counterHu)/(this.state.counterHy + this.state.counterNe + this.state.counterHu)).toFixed(1) 
        return keskiarvo;
    }

    positiivisia = () =>{
        const posiitivisia = ((this.state.counterHy / (this.state.counterHy + this.state.counterNe + this.state.counterHu))*100).toFixed(1)
        return posiitivisia
    }
    

    render(){

        return(
            <div>
               <h1>anna palautetta</h1>
                <Button handleClick={() => this.setState({counterHy : this.state.counterHy +1, value:this.state.value+1})} text={"Hyvä"}/>
                <Button handleClick={() => this.setState({counterNe : this.state.counterNe +1, value:this.state.value+1})} text={"Neutraali"}/>
                <Button handleClick={() => this.setState({counterHu : this.state.counterHu +1, value:this.state.value+1})} text={"Huono"}/>
                <h1>statistiikka</h1>
                {
                    this.state.value > 0 ? (
                    <div>
                        <table>
                           <tbody>
                             <Statics name={"Hyvä"} stats={this.state.counterHy}/>
                             <Statics name={"Neutraali"} stats={this.state.counterNe}/>
                             <Statics name={"Huono"} stats={this.state.counterHu}/>
                             <Statistic name={"Keskiarvo"} estadisticas={this.keskiarvo()}/>
                             <Statistic name={"Positiivisia"} estadisticas={this.positiivisia()}/>
                          </tbody>
                       </table>
                    </div>
                    ) : (
                      <h2>ei yhtään palautetta annettu</h2>
                    )
                }
                
            </div>
        )
    }

      
}


export default FeedBackTwo