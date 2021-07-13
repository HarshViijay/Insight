import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';
const projectID = '1708ba0c-b67d-46dc-8405-012e87888ba6';

function Chat() {
    return (
            <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      );
}
export default Chat;