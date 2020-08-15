import React, { Component } from 'react'
import { Col , Image, Button } from 'react-bootstrap'


export default class MoveiCard extends Component {
    render() {
        let {name,link, history,type,  } = this.props.movei
        return (
            <Col md={3} className="m-3" style={{borderStyle:"double" , borderRadius:"30px" , display:"flex" , flexDirection:"column" ,alignItems:"center"}}>
                <Image roundedCircle style={{height:150,width:150}} src={link}></Image>
             
               <p>{this.props.movei.name}</p>
               <h5>{history}</h5>
               <h5>{type}</h5>
              
               <Button variant="outline-waring" style={{color: "white"}}> more info</Button>

             </Col>
        )
    }
}
