import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} 
                  addPost={props.addPost} onChangeArea={props.onChangeArea}/>} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/News' render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
