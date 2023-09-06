import React from 'react'
import "../CityItinerary/cityItinerary.css"
import MainLayout from '../MainLayout/MainLayout';
import { Link as Anchor } from 'react-router-dom'


const CityCard = () => {

return (
   <MainLayout>
    <div className='cityItineraryContainer'>
       
    <div>
        <h1>Kuala Lumpur</h1>
        <i> <img className='locationIcon' src="\pngegg.png" alt="Location Icon"/><h2>Malaysia</h2> </i>
        <img src="\Cities Images\kuala-lumpur.jpg" alt=" Kuala Lumpur " />
    </div>
    <div className='ItineraryConatainer'>
       <div>
       <img src="\th.jpg" alt="foto guia" /> 
       <h3>NombreGuia</h3>
       </div>
       <div className='priceContainer'>
        <h3>Price</h3>
        <img className='moneyIcon'src="\pngaaa.com-57209.png" alt="Money Sign" />
        <img className='moneyIcon'src="\pngegg.png" alt="Money Sign" />
        <img className='moneyIcon'src="\pngaaa.com-57209.png" alt="Money Sign" />
       </div>
       <div className='durationContainer'>
        <h3>Duration</h3>
        <p>3 hours</p>
       </div>
       <div className='ratingContainer'>
        <h3>Rating</h3>
        <img className='likeIcon'src="\like-10440.png" alt="Like" />
        <img className='likeIcon'src="\like-10452.png" alt="Like" />
        <img className='likeIcon'src="\like-10460.png" alt="Like" />
       </div>
    </div>
    <div>
        <button>View More</button>
    </div>

</div>

<Anchor to ={"/home"}>
               
               <button type="button" className="backHomeButton">Back Home</button>
           </Anchor>

</MainLayout>

);

}

export default CityCard;