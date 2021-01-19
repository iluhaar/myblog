import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Navbar/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

function App(props) {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store} />} />
          <Route path='/profile' render={() => <Profile
            store={props.store} />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/News' render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
