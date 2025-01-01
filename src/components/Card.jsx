import React from 'react';
import { Link, useParams } from "react-router-dom";


const Card = () => {
    const { userId } = useParams();
  
    return (
      <div>
        <nav className='mx-auto flex flex-col items-center pt-10 gap-4 justify-center'>
          <ul className='flex gap-4'>
            <li className='mb-3'>
              <Link className='bg-gray-600 text-white rounded p-1' to="/user/-1">User 1</Link>
            </li>
            <li className='mb-3'>
              <Link className='bg-gray-600 text-white rounded p-1' to="/user/-2">User 2</Link>
            </li>
          </ul>
     
        <p>User ID :{userId}</p>
        </nav>
      </div>
    );
  };

  export default Card;

 
