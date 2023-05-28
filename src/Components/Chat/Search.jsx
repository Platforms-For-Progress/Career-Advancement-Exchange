import React, { useContext, useState } from 'react'
import { Box, Text, Input, Avatar, Button } from "@chakra-ui/react"
import { UserContext } from '../../utils/User';
import { useUser } from '../../utils/User';
import { query, collection, where, getDocs, doc, getDoc, setDoc, updateDoc, serverTimestamp} from 'firebase/firestore';
import { firestore } from '../../firebase';

const Search = () => {
    const [username, setUsername] = useState("");
    const [user_, setUser_] = useState(null);
    const [err, setErr] = useState(false);

    const {user, userInfo, loading, error} = useUser()

    const handleSearch = async () => {
    const q = query(collection(firestore, "users"), where("name", "==", username));
    // let q;
    // if (userInfo.role === "user") {
    //     q = query(collection(firestore, "users"), where("name", "==", username), where("role", "==", "admin"));
    // } else {
    //     q = query(collection(firestore, "users"), where("name", "==", username), where("role", "==", "user"));
    // }
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser_(doc.data())
        console.log(doc.data())
        });
    } catch(err) {
        setErr(true)
    }
    };

    const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
    };

    const handleSelect = async() => {
        const combinedId = userInfo.name + user_.name
        try {
          const res = await getDoc(doc(firestore, "chats", combinedId));
          if (!res.exists()) {
            await setDoc(doc(firestore, "chats", combinedId), {messages:[]})

            const user1 = await getDoc(doc(firestore, "userChats", userInfo.name));
            const user2 = await getDoc(doc(firestore, "userChats", user_.name));

            if (!user1.exists()) {
              await setDoc(doc(firestore, "userChats", userInfo.name), {
                [combinedId]: {
                  date: serverTimestamp(),
                  userInfo: {
                    name: user_.name
                  }
                }
              });
            } else {
              await updateDoc(doc(firestore, "userChats", userInfo.name), {
                [combinedId+".userInfo"]: {
                  name: user_.name,
                },
                [combinedId+".date"]: serverTimestamp()
              });
            }
            
            
            if (!user2.exists()) {
              await setDoc(doc(firestore, "userChats", user_.name), {
                [combinedId]: {
                  date: serverTimestamp(),
                  userInfo: {
                    name: userInfo.name
                  }
                }
              });
            } else {
              await updateDoc(doc(firestore, "userChats", user_.name), {
                [combinedId+".userInfo"]: {
                  name: userInfo.name,
                },
                [combinedId+".date"]: serverTimestamp()
              });
            }
          } 
        } catch(err) {}
        setUser_(null)
        setUsername("")
    }

    const handleCancel = () => {
        setUser_(null)
        setUsername("")
    }
    
    

  return (
    <Box borderBottom={"0.5px solid #d5d9db"}>
        <Text fontSize={"25px"} pl={"15px"}>Start a new message</Text>
        <Box display={"flex"}>
            <Input 
            placeholder='Search'
            border={"none"}
            _focusVisible={false}
            onKeyDown={handleKey} 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
            <Button
            bg={"none"}
            onClick={handleCancel}
            >X</Button>
        </Box>
        {user_ &&
        <Box
        paddingTop={"25px"}
        pb={"25px"}
        pl={"15px"}
        pr={"20px"}
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        color={"black"}
        cursor={"pointer"}
        onClick={handleSelect}
        >
            <Avatar
            src={user_?.photoURL} 
            alt={user_?.displayName}
            width={"81px"}
            height={"81px"}
            borderRadius={"25%"}
            boxShadow={"0px 5px 20px 5px #d5d9db"}
            objectFit={"cover"}
            />
            <Box>
                <Text>{user_.name}</Text>
                <Text>{user_.role}</Text>
            </Box>
        </Box>}
    </Box>
  )
}

export default Search
