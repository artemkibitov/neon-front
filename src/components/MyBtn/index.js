import React from 'react';

const MyButton = () => {
  const handleClick = async () => {
    try {
      // const orderData = {
      //   name: 'Jon',
      //   lastname: 'Doe',
      //   phone_number: '097777777777',
      //   total: 10000,
      //   img: 'image_url',
      //   light_color: 'red',
      //   size: 'medium',
      //   width: 10.5,
      //   height: 20.5,
      //   waterproof: true,
      //   backboard_style: 'style1',
      //   backboard_color: 'black',
      //   processed: false,
      //   ip: '127.0.0.1'
      // };
      // const request = JSON.stringify(orderData);
      const response = await fetch('/api/users/hash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: '' }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>Test Request</button>;
};

export default MyButton;



