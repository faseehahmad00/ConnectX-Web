// import { ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import './App.css';
import ChatList from "./Components/ChatList";
import ContactData from "./Data/ContactData";

function App() {
  return (
    <div className="App">
        <div className="title">
          <h1>ConnectX</h1>
        </div>
        <div className="Body">
            <div className='contacts'>
                <ChatList
                    className='chat-list'
                    dataSource={ContactData} />
            </div>
            <div className='chat'>
                <p>Chats</p>
            </div>
        </div>
    </div>
  );
}

export default App;
