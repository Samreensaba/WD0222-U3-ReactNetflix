import { Component } from "react";
import Gallary1 from "./Gallary1"


class GallaryComb extends Component{
    render(){
        return(
            <div>
                <Gallary1 movieGenre="hobbit" title="Hobbit"/>
                <Gallary1 movieGenre="harrypotter" title="Harry Potter"/>
                <Gallary1 movieGenre="spiderman" title="Spiderman"/>
            
            </div>
        )
    }
}
export default GallaryComb