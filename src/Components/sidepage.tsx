import React from 'react';
import '../Styles/sidepage.css';
import { Avatar } from 'flowbite-react';
import Avathar from '../assets/Avathar.avif';
import Dashboard from './smallcomponents/dropdown';

const Sidepage: React.FC = () => {
    return (
        <div className='sidebar'>
            <div className="flex items-center">
                <Avatar className="Avathar mr-4" img={Avathar} alt="Charan M" rounded />
                <div>
                    <h1 className="text-lg font-semibold">CHARAN M</h1>
                    <p className="text-sm text-gray-500">Hyd, IND</p>
                </div>
            </div>
            
            <div className="mt-4">
                <Dashboard />
            </div>
        </div>
    );
};

export default Sidepage;
