import { Component } from "react";
import Gallary1 from "./Gallary1";
import MyNav from "./MyNav";


class MainPage extends Component{
    render(){
        return(
            <div className="d-flex">
                <div><MyNav/></div>
                <Gallary1/>
                
                
            </div>
        )
    }
}
export default MainPage