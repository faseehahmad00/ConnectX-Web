import './App.css';
import Chathome from "./Components/Chathome";
import Contacts from "./Components/Contacts";
import ChatScreen from "./Components/ChatScreen";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import messages from './Data/Message';

function App() {
    return (
        <Router>
            <div className="App">
                {/* <div className="title">
                    <h1 style={{marginLeft: '20px'}}>ConnectX</h1>
                </div> */}
                <div className="Body">
                    <Contacts/>
                    <div className='chat'>
                        <Switch>
                            <Route exact path="/">
                                <Chathome/>
                            </Route>
                            <Route exact path="/chat/:id">
                                <ChatScreen messages={messages} userid={'1'}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
