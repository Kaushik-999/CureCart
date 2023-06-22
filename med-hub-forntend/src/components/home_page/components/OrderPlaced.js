import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OrderPlaced() {

const list = useSelector((state) => state.cartReducer.list);
  const len = list.length;
  return (
    <div className='mt-2'>
    
    <div className='text-green-500 text-9xl flex justify-center mt-5' >
    <BsFillPatchCheckFill />
    
        
    </div>
    <div className='flex justify-center'>
    <p className='text-green-500 text-4xl font-semibold'>Your Order has been placed</p>
    </div>

    <div className="mx-5 py-8">
      <h2 className="text-2xl font-semibold mb-4">Ordered Items</h2>
      {list.map((item) => (
        <div
          key={item.id}
          className="flex border mb-4 rounded-md p-4 shadow-sm"
        >
          <img
            src={item.link}
            alt={item.title}
            className="w-24 h-24 object-contain rounded-md mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">Price: ${600}</p>
            <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Total: ${700}</p>
          </div>
        </div>
      ))}
    </div>

    <div className='flex justify-center'>
        <Link to="/">
        <button className='font-semibold text-lg bg-emerald-500 px-5 py-2 text-white mt-5'>CONTINUE SHOPPING</button>
        </Link>
    </div>
      
    </div>
  )
}

export default OrderPlaced
