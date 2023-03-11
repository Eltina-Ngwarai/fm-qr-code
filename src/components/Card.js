import './Card.css';
import elty from '../images/pic.png'

export default function Card (){
    return(
        <div className="card-container">
           <div className="card-image">
            <img src={elty} alt="" />
            </div>
           <div className="card-title">
          <h2>Improve your front-end skills by building projects</h2>
           </div>
           <div className="description">
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
           </div>
        </div>
    )
}