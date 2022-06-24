import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie"


class Gallary1 extends Component{
    state={
        movieList:[]
    }
    componentDidMount= async()=>{
       await this.movieFetch(this.props.movieGenre)
    }

    movieFetch= async(query)=>{
        const url=`http://www.omdbapi.com/?apikey=fcba03d5&s=${query}`

        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            this.setState({
                movieList: data.Search
            })
        }
        else{
            const message = response.text()
            console.log(message)
        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <div><h2>{this.props.title}</h2></div>
                {this.state.movieList &&
                   this.state.movieList.map((movie)=>(
                    <Col xs={6}
                    sm={4}
                    md={3}
                    lg={3}
                    className="mb-5" key= {movie.imdbID}>
                   <SingleMovie movie={movie}/>
                    </Col>
                   ))
                   }
                </Row>
            </Container>
        )
    }
}
    
export default Gallary1