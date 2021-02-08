import { useParams } from "react-router-dom";
import './ChatScreen.css';
import { format } from 'date-fns';
import sending from '../Images/send.svg';
import { useEffect, useState } from "react";


export default function ChatScreen({ messages, userid }) {
    const { id } = useParams();
    let [msgs, setmsgs] = useState([]);
    let [text, settext] = useState('');
    let [disabled,setDisabled] = useState(true);

    function updateScroll() {
        let element = document.getElementById("bodyid");
        element.scrollTop = element.scrollHeight;
    }


    useEffect(() => {
        setmsgs(messages);
    }, [messages]);

    useEffect(() => {
        return () => {
            updateScroll();
        }
    })

    let handleChange = (event) => {
        settext(event.target.value);
        console.log(event.target.value);
        if(event.target.value === ''){
            setDisabled(true);
        }
        if(event.target.value !== ''){
            setDisabled(false);
        }
    }

    let sendMessage = () => {
        if(text !== ''){
        let newMessages = [...msgs];
        newMessages.push({
            id: new Date().getMilliseconds().toString(),  //unique id 
            createdAt: new Date(),
            sender: '1',
            messagetext: `${text}`,
        });
        setmsgs(newMessages);
        settext('');
        updateScroll();  
        setDisabled(true);    
    }
}
    return (
        <div className="Chatscreen">
            <div className="header">
                <img className="headerimg" src="https://source.unsplash.com/random/200x202/" alt="." />
                <h3>{id}</h3>
            </div>
            <div className="body" id="bodyid">
                {msgs.map(m => {
                    let date = format(m.createdAt, "MMM-dd-yy  HH:mm");
                    return (
                        <div id="msg" className={m.sender === userid ? "messagecomponentright" : "messagecomponentleft"} key={m.id}>
                            <img className="avatar"
                                src={m.sender === userid ? "https://source.unsplash.com/random/500x102/" : "https://source.unsplash.com/random/200x202/"} alt="." />
                            <div className="messagebody">
                                <div className={m.sender === userid ? "messageright" : "messageleft"}>
                                    <p className="messagename">{m.sender === userid ? 'you' : `${id}`}</p>
                                    <p className="messagetext">{m.messagetext}</p>
                                    <p className="messagetime">{date}</p>
                                </div>
                            </div>
                        </div>
                    );
                })

                }
            </div>
            <div className="form">
                <textarea
                    type="text"
                    required value={text} onChange={handleChange} placeholder='new message here' />
             {!disabled && <button onClick={() => { sendMessage() }} disabled={disabled}>
                    <img style={{ height: '20px', width: '20px', }} alt='send' src={sending} />
                </button>
                }
            </div>
        </div>


    );
}



