import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import axios from 'axios';

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
  //get ordered list

  const [list2, setList] = useState(null);
  const [dates, setDates] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOrderedList = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const header = {
          token: token,
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/homepage/getOrders/",
          {
            headers: header,
          }
        );
        // console.log(response.data.orders)
        let list1 = [];
        let date = [];
        for (const it of response.data.orders) {
            // console.log(it.list)
            list1 = list1.concat(...it.list)
             date = date.concat(it.date)
          }

       
           
        
          // console.log(list1);
        // console.log(date);

        setList(list1);
        console.log(list2)
        setDates(date);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getOrderedList();
  }, []);




  return (
    <>
    {
      loading ? (<div className="vendor-invoices-loading-message">Loading...</div>)
    :(
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Ordered Items</h2>
      
      {list2 && list2.map((item) => (
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
            <p className="text-gray-600 mb-2">Price: ${item.price}</p>
            <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Total: ${item.price*item.quantity}</p>
            <p className="text-gray-600">Date of Delivery: {item.date}</p>
          </div>
        </div>
      
      ))}
    </div>
    )
      }
      </>
  );

};

export default OrderedItemsPage;