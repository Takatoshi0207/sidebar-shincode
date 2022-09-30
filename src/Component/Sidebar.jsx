import React from 'react';
import { SidebarData } from '../Component/SidebarData'

function Sidebar() {
  return (
    <div>
      <ul>
        {SidebarData.map((value, key) => {
          return (
            <li>ホーム</li >
          );
        })}
      </ul >
    </div >
  );
}

export default Sidebar