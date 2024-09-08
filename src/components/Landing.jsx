import rinja from "../assets/mt-rinja.jpg"
import './Landing.css'


export default function Landing(){
    return(
      
        <div className="body" style={{ backgroundImage: `url(${rinja})`}}>
           
                <div className="img-blurb">
                    <h1 className="libre-baskerville-regular">
                        UNEARTH UNPARALLELED LANDSCAPES OF LOMBOK IN ITS IDYLLIC AND NATURAL SERENITY
                    </h1>
                
                    <h2 className="libre-baskerville-regular-italic">Your private villa awaits. </h2> 
                </div>
          
        </div>
    )
}