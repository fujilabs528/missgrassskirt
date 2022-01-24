import React from "react"
import "./hero.styles.scss"
import {withRouter} from "react-router-dom"

const Hero = ({history}) =>{
    return(
        <section className="hero is-info is-large hero-image">
            <div className="hero-body">
                <div className="container">    
                    <h1 className="hero-title">
                        Bags Reimagined
                    </h1>
                    <div className="shop-now-btn">
                        <button
                        onClick={()=> history.push("/shop")}
                        className="button is-black"
                        id="shop-now">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Hero)


//video 400000