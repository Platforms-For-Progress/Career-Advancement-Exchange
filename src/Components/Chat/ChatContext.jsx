import React, {useContext, useReducer, createContext } from "react";
import { UserContext } from "../../utils/User";

export const ChatContext = createContext();

export const ChatContextProvider = ({children}) => {
    const {userInfo} = useContext(UserContext);
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    };

    const chatReducer = (state, action) => {
        switch(action.type) {
            case "CHANGE_USER":
                return { 
                    user:action.payload,
                    chatId: userInfo.name.length > action.payload.name.length ? userInfo.name + action.payload.name : action.payload.name + userInfo.name
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);


    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {children}
        </ChatContext.Provider>
    );
};