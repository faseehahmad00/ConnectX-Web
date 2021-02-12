import '../App.css';
import ChatList from "./ChatList";
import ContactData from "../Data/ContactData";
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

export default function Contacts(){
    let [keyword,setkeyword] = useState('');
    let [contacts,setContacts] = useState([]);

    useEffect(()=>{
        let filteredContacts =  [...ContactData];
        console.log(filteredContacts);
        let newfilter = filteredContacts.filter(m => {
            return m.title.toLowerCase().replace(/\s/g, '').includes(keyword.toLowerCase().replace(/\s/g, '')) ;
        })
        setContacts(newfilter);
    },[keyword])
    return(
        <div className='contacts'>
            
            <div className="title">
                    <h1 style={{marginLeft: '10px'}}>ConnectX</h1>
                </div>

            <div className="contactsHeader">
                <div className="searchbar">
                <AiOutlineSearch style={{height:'18px',width:'18px'}}/>
                <input type="text" placeholder="search" value={keyword} onChange={(event)=>setkeyword(event.target.value)}/>
                </div>
            </div>
            <div  className="Contactsbody">
            <ChatList dataSource={contacts} />
            </div>
        </div>
    )
}