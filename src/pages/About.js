import './App.css';
import mockgetty from '../assets/mockgetty.jpeg'


// import { Layout } from '../wrapper/Layout';

export function About() {
    //Need to find a more simple way to push the beginning of the component down (use fixed position?)
    return (

        <div className='h-100% bg-white'>
                    <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <div className='place-content-center'>
                    <img src={mockgetty} alt="Mock Team pictur"></img>

                    <br></br><br></br><br></br>
                    </div>

                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
        
        



    )
}

