import { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket('wss://uniapi.hostwithdothost.com/');

    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
      // You can send messages here if needed
    });

    socket.addEventListener('message', (event) => {
      console.log('WebSocket message received:', event.data);
      // Handle the received message here
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default WebSocketComponent;
