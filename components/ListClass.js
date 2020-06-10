import React, { Component } from 'react'

export default class ListClass extends Component {


    render() {
         
        return (
            
            <div id="clase-container" >
                <div>   
                 <h2>Clases de {this.props.nombre}</h2>
                            {this.props.clase.map(item =>{

                                    return (
                                        <div className="clase-list" key={item.id}>
                                                <img src={item.Photo} alt=""/>
                                                <p>{item.first_name} {item.last_name}</p>
                                        </div>
                                    )

                            } 
                            )}            
                
                        <style jsx>
                            {
                                `
                                    #clase-container{
                                        perspective: 500px;
                                    }

                                    .clase-list{
                                        display:flex;
                                    }

                                    .clase-list img{
                                        padding:3px;
                                        border:1px solid #ccc;
                                    }

                                    .clase-list p{
                                        font-size:12px;
                                        font-weight:bold;
                                        font-style:italic;
                                        margin-left:12px;
                                    }

                                    .clase-list:hover{
                                        transform:translateY(10px)scale(1);
                                    }

                                `
                            }
                        </style>                
                </div>
                 </div>
        )
    }

   


}
