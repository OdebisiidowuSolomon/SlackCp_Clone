import React from "react";
import { useState, useEffect } from "react";

import "./Sidebar.css";

// import FiberManualRecordIcon from '@material-ui/icons'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";
// import InsertCommentIcon from "@material-ui/icons/InsertCommentOutlined";
import SidebarOption from "./SidebarOption";
// import InboxIcon from "@material-ui/icons/InboxOutlined";
// import DraftsIcon from "@material-ui/icons/DraftsOutlined";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
// import PeopleAltIcon from "@material-ui/icons/PeopleAltOutlined";
// import AppsIcon from "@material-ui/icons/AppsOutlined";
// import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
// import ExpandLessIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Bridge</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
      </div>
      {/* <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr /> */}
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add" />
      {channels.map((channel, i) => (
        <SidebarOption title={channel.name} key={i} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
