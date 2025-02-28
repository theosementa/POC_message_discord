import { observer } from 'mobx-react'
import { MessageStore } from './stores/message.store'
import './styles/App.css'

const App = observer(() => {
  const messageStore = MessageStore.shared

  return (
    <div className='flex flex-col h-screen w-screen justify-end p-4 gap-4'>
      <div className='flex flex-col overflow-y-auto justify-end'>
      {messageStore.messages.map(($0, index) => (
      <p key={index}>{$0}</p>
    ))}
      </div>
      <div className='flex flex-row justify-center gap-4 w-full'>
        <input
          className='bg-gray-900 px-4 rounded-lg w-full'
          type='text'
          placeholder='Enter a message here ....'
          value={messageStore.currentMessage}
          onChange={(e) => messageStore.currentMessage = e.target.value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              messageStore.sendMessage()
            }
          }}  
        ></input>
        <button
          onClick={() => messageStore.sendMessage()}
        >Envoyer</button>
      </div>
    </div>
  )
})

export default App
