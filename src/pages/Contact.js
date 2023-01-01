import './App.css';
import Bagelplaceholder from '../assets/Bagel_(Placeholder).jpeg'



export function Contact () {


    return (
        <div className='bg-white text-bold '>
            <br></br><br></br><br></br><br></br> <br></br><br></br>
            <div className='flex flex-row justify-center place-items-center'>
                <img src={Bagelplaceholder} alt="Bagels" height="200" width="600" className=''></img>
            </div>
            <br></br>
            <div className='flex flex-col col-3'>
                <form className='flex flex-col justify-center mb-64 mx-96' action=''>
                    <input className='border border-black my-4 py-2' type='text' placeholder='Name'/> 
                    <input className='border border-black my-4 py-2' type='text' placeholder='Email'/> 
                    <input className='border border-black my-4 py-2' type='text' placeholder='Phone Number'/> 
                    <select className='border border-black my-4 py-2'>
                        <option selected value="" disabled="disabled">What are you getting in touch about?</option>
                        <option value={"Catering"}>Catering</option>
                        <option value={"Job"}>Job Opportunities</option>
                        <option value={"Feedback"}>Donation</option>
                        <option value={"Donation"}>Donation</option>
                    </select>
                    <input className='border border-black my-4 h-20' type='text' placeholder='Your Message'/> 
                    <button className='border border-black bg-emerald-200 rounded-lg py-2' type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    )

}
