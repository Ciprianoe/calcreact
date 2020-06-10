class Calculadora extends React.Component {
        state = {
            res:""
           
        }

        onDigit = (digit)=>{
           const expresion = this.state.res + digit
            this.setState(
               {
                   res: expresion
               }
           )
        }
        ejecutarResultado=()=>{
            const resultados = eval(this.state.res)
            this.setState({
                res:resultados
            })
        }

//<a className="waves-effect waves-light btn" onClick={()=>this.onDigit("0")}> 0 </a>
        alertar = ()=>{
            alert('Hola desde metodo de clase Num 1')
        }

    render() {
        return (
            <div>
                <h1>Page calc here</h1>
                <div className="z-depth-3  orange darken-1 white-text center-align result">
                    {this.state.res || "0"}
                        </div>
                <div className="calc-container indigo accent-2 hoverable z-depth-2">                    
                 {
                     ["0","1","2","3","4","5","6","7","8","9","."].map(digit=>{
                         return (
                         <a className="waves-effect waves-light btn" onClick={()=>this.onDigit(digit)}>{digit}</a> 
                         )
                     })
                 }


                <div className="operadores center-align">  
                    {

                            ["+","-","*","/"].map(digit=>{
                                    return(
                                        <a className="waves-effect waves-light btn" onClick={()=>this.onDigit(digit)}>{digit}</a>
                                    )
                            })
                     }
                     <a className="waves-effect waves-light btn" onClick={()=>this.setState({res:""})}>C</a>  

                </div>
                <a className="waves-effect waves-light btn" onClick={this.ejecutarResultado}>Enter</a>  


                </div>
               
                <style jsx>
                    {
                        `
                                                    .result{
                                                        width:270px;
                                                        margin:0 auto;
                                                        font-size:32px;
                                                        margin-bottom:10px;
                                                    }

                                                    .calc-container{
                                                        width:270px;
                                                        margin:0 auto;
                                                        text-align:center;
                                                        padding:12px;
                                                    }

                                                    .calc-container a{
                                                        margin:5px;
                                                    }
                                                    .operadores{
                                                        width:270px;
                                                        margin:0 auto;
                                                        border:0px solid #ccc;
                                                        padding:12px;
                                                        margin-top:20px;
                                                    }
                        
                                                `
                    }
                </style>
            </div>



        )

    }



}

export default Calculadora;