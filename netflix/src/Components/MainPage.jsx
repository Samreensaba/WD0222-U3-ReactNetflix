import { Component } from "react";
import GallaryComb from "./GallaryComb";
import MyNav from "./MyNav";


class MainPage extends Component{
    render(){
        return(
            <div style={{backgroundColor:"black"}}>
                <MyNav/>
                <GallaryComb/>
                </div>    
                
           
        )
    }
}
export default MainPage