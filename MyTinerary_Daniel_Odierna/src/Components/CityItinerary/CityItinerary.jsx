import React from 'react'
import "../CityItinerary/cityItinerary.css"


const CityCard = ({city}) => {
return (

    <div className='cityItineraryContainer'>
       
    <div>
        <h1>Kuala Lumpur</h1>
        <i> <img className='locationIcon' src="\pngegg.png" alt="Location Icon"/><h2>Malaysia</h2> </i>
        <img src="\Cities Images\kuala-lumpur.jpg" alt=" Kuala Lumpur " />
    </div>
    <div className='ItineraryConatainer'>
       <div>
       <img src="" alt="" /> 
       <h3>NombreGuia</h3>
       </div>
       <div className='priceContainer'>
        <h3>Price</h3>
        <img src="\pngaaa.com-57209.png" alt="Money Sign" />
        <img src="\pngegg.png" alt="Money Sign" />
        <img src="\pngaaa.com-57209.png" alt="Money Sign" />
       </div>
       <div className='durationContainer'>
        <h3>Duration</h3>
        <p>3 hours</p>
       </div>
       <div className='ratingContainer'>
        <h3>Rating</h3>
        <img src="\like-10440.pngg" alt="Like" />
        <img src="\like-10452.png" alt="Like" />
        <img src="\like-10460.png" alt="Like" />
       </div>
    </div>
    <div>
        <button>View More</button>
    </div>

</div>

);

}

export default CityCard;