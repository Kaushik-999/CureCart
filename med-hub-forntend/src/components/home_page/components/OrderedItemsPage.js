import React from 'react';
import { useSelector } from 'react-redux';

const OrderedItemsPage = () => {

  const list = useSelector((state) => state.cartReducer.list);
  const len = list.length;
  const orderedItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      imageUrl: 'https://example.com/product2.jpg',
    },
    // Add more ordered items if needed
  ];

  return (
    <div className="container mx-auto py-8">
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
  );
};

export default OrderedItemsPage;