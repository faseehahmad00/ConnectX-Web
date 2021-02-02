import '../App.css';
import ChatList from "./ChatList";
import ContactData from "../Data/ContactData";

export default function Contacts(){
    return(
        <div className='contacts'>
            <ChatList
                className='chat-list'
                dataSource={ContactData} />
        </div>
    )
}