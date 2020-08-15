import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navbar/Nave'
import Home from './home/Home';
import About from './about/About';
import AllMovies from './Moveis/AllMovies';

// import MoveiCard from './Moveis/MoveiCard';

import { Switch , Route } from "react-router-dom"
// import OneMovei from './Moveis/OneMovei';

export default class App extends Component {
  render() {
    return (
      <div>
       <Nave />  

       <Switch>

         {/* <Route path="/home" component={Home} /> */}
         <Route path="/home" render={()=> <Home />} />
         {/* <Route path="/home" render={()=> <Home name = {"Samiah"}/>} /> */}

         {/* <Route path="/about" component={About} /> */}
         <Route path="/about" render={()=> <About/>} />

         {/* <Route path="/allMovies" component={AllMovies} /> */}
         <Route path="/allMovies" render={()=> <AllMovies/>} />
         {/* <Route exact path="/allMovies" render={()=> <AllMovies/>} /> */}


         {/* <Route path="/MoveiCard" render={()=> <MoveiCard/>} /> */}

        {/* <Route path="/allMovie/:id" component={OneMovei}/> */}



      

       </Switch>

      </div>
    )
  }
}
