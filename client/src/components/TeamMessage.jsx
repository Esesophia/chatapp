import React from 'react';
import { MessageSimple, useMessageContext ,MessageList} from 'stream-chat-react';

const TeamMessage = () => {
    const { message } = useMessageContext();
   

    return (      
            <MessageSimple message={{ ...message, user: {}}} />       
    )
}

export default TeamMessage

