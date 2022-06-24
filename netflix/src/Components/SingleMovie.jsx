import { Component } from "react";
import {Card} from "react-bootstrap"


class SingleMovie extends Component{
    render(){
        return(
            <Card>
                <Card.Img variant="top" src={this.props.movie.Poster}/>
                <Card.Body>
                    <Card.Title>{this.props.movie.Title}</Card.Title>
                </Card.Body>
                
            </Card>
        )

        
    }
}
export default SingleMovie