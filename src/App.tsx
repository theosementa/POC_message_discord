import { observer } from 'mobx-react';
import { useEffect, useRef } from "react";
import { MessageStore } from './stores/message.store';
import './styles/App.css';

const App = observer(() => {
  const messageStore = MessageStore.shared;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageStore.messages.length]);

  return (
    <div className='flex flex-col h-screen w-screen p-4 gap-4'>
      <div className='flex flex-col flex-grow h-64 overflow-y-auto'>
        <div className='flex-grow'></div>
        {
          messageStore.messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))
        }
        <div ref={messagesEndRef} />
      </div>
      <div className='flex flex-row justify-center gap-4 w-full'>
        <input
          className='bg-gray-900 px-4 rounded-lg w-full'
          type='text'
          placeholder='Entrez un message ici...'
          value={messageStore.currentMessage}
          onChange={(e) => (messageStore.currentMessage = e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              messageStore.sendMessage();
            }
          }}
        />
        <button onClick={() => messageStore.sendMessage()}>Envoyer</button>
      </div>
    </div>
  );
});

export default App;
