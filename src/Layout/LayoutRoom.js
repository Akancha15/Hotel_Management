import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Rooms from "../Room/Rooms";



const LayoutRoom=()=>
{
    return (
        <>
          <div className="layout">
          <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Rooms className="dashbaord"/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutRoom;
