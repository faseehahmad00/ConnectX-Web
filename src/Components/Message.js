import './Message.css';
import { BsCheckAll,BsCheck} from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";

export default function Message({sender,userid,text,date,id,status}) {
    return (
        <button id="msg" className={sender === userid ? "messagecomponentright" : "messagecomponentleft"} key={id}>
        <img className="avatar"
            src={sender === userid ? "https://source.unsplash.com/random/500x102/" : "https://source.unsplash.com/random/200x202/"} alt="." />
        <div className="messagebody">
            <div className={sender === userid ? "messageright" : "messageleft"}>
                <p className="messagename">{sender === userid ? 'you' : `${id}`}</p>
                <p className="messagetext">{text}</p>
                <div className="bottombar">
                    <p className="messagetime">{date}</p>
                    { status === 'sent' && sender === userid &&
                        <BsCheck className="status" />}
                    {
                        status === 'read' && sender === userid &&
                        <BsCheckAll className="status"/>
                    } 
                    {
                         status === 'sending' && sender === userid &&
                        <VscLoading className="status" style={{fontSize:'8px',margin:'0px 0px 2px 2px'}}/>
                    }   
                </div>
            </div>
        </div>
    </button>
    );
}