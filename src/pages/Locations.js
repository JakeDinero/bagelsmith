import './App.css';
import BagelsmithLorimer from '../assets/BagelsmithLorimer.jpeg'
import BagelsmithBedford from '../assets/BagelsmithBedford.jpeg'
import React from 'react';



export function Locations () {
    //this code worked when in Contact... not sure why it broke when I put it here. I think because the Link to is broken (need to check routes again)
    
    return (
        <div className='bg-white text-bold'>
            <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br>
            <div className='flex flex-column place-content-center '>
                <div className='pl-36 pr-28'>
                    <a href='https://www.yelp.com/biz/bagelsmith-brooklyn' target="_blank" rel="noopener noreferrer">
                        <img height="400" width="400" classname="h-10 w-10 r-10" src={BagelsmithBedford} alt="Bedford"></img>
                    </a>
                    <br></br>
                    <div className='flex flex-row justify-center'>
                        189 Bedford Avenue <br></br>
                        Brooklyn, NY, 11211
                        <br></br><br></br>

                        Phone: (718) 218-7414
                        <br></br><br></br>

                        Open 24 hours
                    <br></br><br></br>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <button className="border rounded-md bg-cyan-600 px-4 py-2" onClick={() => window.open('https://www.google.com/maps/place/Bagelsmith+-+Bedford+Ave./@40.7175806,-73.9600439,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595dc2da294f:0xf489c476399ef880!8m2!3d40.7175827!4d-73.9578595')}> Get Directions</button>
                    </div>
                </div>
                <div>
                </div>
                <div className='pl-28 pr-36'>
                    
                    <a href='https://www.yelp.com/biz/bagelsmith-brooklyn-2' target="_blank" rel="noopener noreferrer">
                        <img height="400" width="400" classname="h-10 w-10 pl-10" src={BagelsmithLorimer} alt="Lorimer"></img>
                    </a>
                    <br></br>
                    566 Lorimer Street <br></br>
                    Brooklyn, NY, 11211
                    <br></br><br></br>

                    Phone: (347) 294-0046
                    <br></br><br></br>

                    Open 24 hours
                    <br></br><br></br>

                    <button className="border rounded-md mb-8 bg-cyan-600 px-4 py-2" onClick={() => window.open('https://www.google.com/maps/place/Bagelsmith/@40.7138889,-73.9513554,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595dc2da294f:0x253790746764d06b!8m2!3d40.7138889!4d-73.9491667')}>Get Directions</button>

                </div>



            </div>
            <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>

    )

}