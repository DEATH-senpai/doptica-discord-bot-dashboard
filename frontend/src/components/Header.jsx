import React from 'react';
import dopticaLogo from '../assets/Doptica.png';

function Header() {
  return (
    <div className="bg-input p-4 flex justify-center items-center sticky top-0 z-50">
    <img src={dopticaLogo} alt="Doptica Logo" className="h-10" />
    <style>
      {`
        .bg-gray-900 {
          background-color: #001252;
        }

        .flex {
          display: flex; /* Flex container */
        }

        .justify-center {
          justify-content: center; /* Center horizontally */
        }

        .items-center {
          align-items: center; /* Center vertically */
        }

        .h-10 {
          height: 10rem; 
          width: 10rem;
          position:absolute;
        }
        .p-4 {
          height: 3rem;
        }
      `}
    </style>
  </div>
);
}

export default Header;