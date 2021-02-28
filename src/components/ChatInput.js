import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Me",
      userImage: "pic",
    });
    chatRef.current.scrollIntoView({ behavior: "smooth" });
    inputRef.current.value = "";
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          ref={inputRef}
          type="text"
          placeholder={`Message ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
    outline: none;
    bottom: 30px;
    width: 60%;
  }

  > form > button {
    display: none !important;
  }
`;
