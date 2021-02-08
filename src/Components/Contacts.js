import '../App.css';
import ChatList from "./ChatList";
import ContactData from "../Data/ContactData";
import { useEffect, useState } from 'react';
import searchicon from '../Images/searchicon.svg';

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
            <div className="contactsHeader">
                <div className="searchbar">
                <img src={searchicon} style={{height:'15px',width:'15px'}}/>
                <input type="text" placeholder="search" value={keyword} onChange={(event)=>setkeyword(event.target.value)}/>
                </div>
            </div>
            <div>
            <ChatList dataSource={contacts} />
            </div>
        </div>
    )
}