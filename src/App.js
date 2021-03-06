import React from 'react';
import './App.css';
import './styles.css';

import SideBar from './components/SideBar/sideBar';
import Main from './components/Main/main';
import {
  HomeSolid,
  HashtagOutline,
  BellOutline,
  MailOutline,
  UserOutline,
  DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";

class App extends React.Component {
  constructor() {
    super(); //Es necesario colocar super para poder crear mi estado para este componente
    this.state = {
      iconArray: [ 
        < HomeSolid />,
        < HashtagOutline />, 
        < BellOutline />, 
        < MailOutline />, 
        < UserOutline />, 
        < DotsCircleHorizontalOutline />
      ],
      profileUrl: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
    }
  }

  render() {
    return (
      <div className="App">
          <SideBar iconList={this.state.iconArray} profileUrl={this.state.profileUrl} />
          <Main profileUrl={this.state.profileUrl} /* cambiarImagen={this.cambiarImagen} */ />
      </div>
    )
  }
}

export default App;
