import React from 'react';
import '../Styles/sidepage.css';
import { Avatar } from 'flowbite-react';
import Avathar from '../assets/Avathar.avif';
import Dashboard from './smallcomponents/dropdown'; // Import the renamed Dashboard component

const Sidepage: React.FC = () => {
    return (
        <div className='sidebar'>
            {/* Section for Avatar and User Info */}
            <div className="flex items-center">
                <Avatar className="Avathar mr-4" img={Avathar} alt="Charan M" rounded />
                <div>
                    <h1 className="text-lg font-semibold">CHARAN M</h1>
                    <p className="text-sm text-gray-500">Hyd, IND</p>
                </div>
            </div>
            
            {/* Section for Dropdown Component */}
            <div className="mt-4">
                <Dashboard /> {/* Using the updated Dashboard component */}
            </div>
        </div>
    );
};

export default Sidepage;
