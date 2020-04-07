import '../App.css';
import ChatList from "./ChatList";
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonPlusFill} from "react-icons/bs";

export default function Contacts(){
    let [keyword,setkeyword] = useState('');
    let [isLoading,setLoading] = useState(true);
    let [contacts,setContacts] = useState([]);


    useEffect(()=>{
        console.log(new Date().getTime())
        fetch('http://localhost:8000/contacts')
        .then(res => res.json())
        .then(json => {
                let newfilter = [...json].filter(m => {
                    return m.title.toLowerCase().replace(/\s/g, '').includes(keyword.toLowerCase().replace(/\s/g, '')) ;
                })
                setContacts(newfilter);
                setLoading(false);
        });
    },[keyword])
    return(
        <div className='contacts'>
            <div className="title">
                <h1 style={{marginLeft: '10px'}}>ConnectX</h1>
                <button className='newUserButton'>
                 <BsPersonPlusFill className='newUserIcon'/>
                </button>
                </div>

            <div className="contactsHeader">
                <div className="searchbar">
                <AiOutlineSearch style={{height:'18px',width:'18px'}}/>
                <input type="text" placeholder="search" value={keyword} onChange={(event)=>setkeyword(event.target.value)}/>
                </div>
       
            </div>
            <div  className="Contactsbody">
            {
                isLoading && <p>Loading...</p>
            }
            {  !isLoading &&
            <ChatList dataSource={contacts} />
}
            </div>

            </div>
            
    )
}