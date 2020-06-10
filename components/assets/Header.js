/*  import React, { Component } from 'react'

 export default class Header extends Component {


    render(){
        return(
            <div>
            <head>
                <title>Nexjs + React</title>
                <meta name="viewport" content="width=divece-width,initial-scale=1.0"/>            
            </head>
            </div>
            ); 
    }
 } */

 import Head from 'next/head'

 export default () => (

    <div>
    <head>
        <title>Nexjs + React</title>
        <meta name="viewport" content="width=divece-width,initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    </head>
    </div>

 )