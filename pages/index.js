import React, { Component } from 'react'
import ListClass from '../Components/ListClass'
import Header from '../components/assets/Header'
import NavBar from '../components/assets/NavBar'
import Matematicas from '../sample/Matematicas.json'
import Ciencias from '../sample/Ciencias.json'
//destructuracion de objetos
import {Lab1,Lab2} from '../sample/Estudiantes'



export default () => (

    <div>               
    <Header/>
    <NavBar/> 
     <h1 style={{textAlign:"center"}}>Hola desde NEXJS REACT</h1>
         <div style={{display:"flex", justifyContent:"space-around"}}>
         <ListClass nombre="Matematicas" clase={Matematicas}/>
         <ListClass nombre="Ciencias" clase={Ciencias}/>
         </div>    
                        
 <style jsx global>

         {
             `
                 body{
                     background:#ffca20;
                 }   
             
             `
         }
 </style>


 </div>
)



/* 
export default class index extends Component {
    render() {
        
        return (
                  
            <div>               
               <Header/>
               <NavBar/> 
                <h1 style={{textAlign:"center"}}>Hola desde NEXJS REACT</h1>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <ListClass nombre="Matematicas" clase={Matematicas}/>
                    <ListClass nombre="Ciencias" clase={Ciencias}/>
                    </div>    
                                   
            <style jsx global>

                    {
                        `
                            body{
                                background:#ffca20;
                            }   
                        
                        `
                    }
            </style>


            </div>
        )
    }
} */
