import React, { Component } from 'react'
import { Container, Row, Col , Form} from 'react-bootstrap'
import MoveiCard from './MoveiCard'
import axios from "axios"
export default class AllMovies extends Component {
    state={
        AllMovies:[],
        loading : false,
        selectedMovies:[]
    }
    componentDidMount(){

    
   

        axios.get('https://sei12.herokuapp.com/movei/json')
        .then(res=>{
            this.setState({
                AllMovies:res.data ,
                selectedMovies: res.data


                // loading:true


            })
           
        }).catch(err=>console.log(err))
          
             
    
      
    }
    filterMovies = ({target:{value}})=>{
        if ( value == "All" )
        {
          this.setState({
              selectedMovies : this.state.AllMovies
          })            

        } else {
            this.setState({
                selectedMovies : this.state.AllMovies.filter(
                  movei => {
                      return movei.typee == value
                  } 
                )
            })
        }

    }
    render() {
        console.log(this.state.AllMovies)

        let AllMovies = this.state.selectedMovies.map(movei =>{
            if(movei.link)

            return      <MoveiCard movei = {movei}/>
        })
        let types = this.state.AllMovies.map(movei => movei.typee)
        types.unshift("All")
        return (
            <div>
                <h1>All Movies</h1>
                <Container className="mt-5">
                <Row className="mt-5 justify-content-center">
                    <Col md={4}>
                <Form.Control as="select" onChange={(e)=> this.filterMovies(e)}>
                    {Array.from(new Set(types)) .map(ele =>(<option>{ele}</option>))}
             
                </Form.Control>
                </Col>
                 </Row>


                    <Row className="mt-5 justify-content-center">  
                    {/* {this.state.loading?AllMovies  :(<h1>loading</h1>)} */}
                    
                    {AllMovies}
                    </Row>
                </Container>
            </div>
        )
    }
}
