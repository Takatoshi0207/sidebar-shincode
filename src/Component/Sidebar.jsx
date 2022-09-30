import React from 'react';
import { SidebarData } from '../Component/SidebarData'

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((value, key) => {
          return (
            <li kye={key}
              id={window.location.pathname == value.link ? "active" : ""}
              onClick={() => { window.location.pathname = value.link; }} className="row">
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li >
          );
        })}
      </ul >
    </div >
  );
}

export default Sidebar