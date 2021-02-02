import { useParams} from "react-router-dom";

export default function ChatScreen(){
    const {id} = useParams();
    return (
       <div>
           <p style={{color:'black'}}>
               CHAT SCREEN {id}
           </p>
       </div>

    );
}