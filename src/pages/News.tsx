import { Box } from "@mui/material"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../shared/firebase";
import { INews } from "../types/News";
import { useState } from "react";
import { Item } from "../components/News/Item";


export const fetchChats = async () => {
  const queryChats = await query(
    collection(db, "news"),
  );

  const News: INews[] = [];

  const querySnapshot = await getDocs(queryChats);
  querySnapshot.forEach((doc) => {
    News.push({ ...doc.data(), uid: doc.id } as INews);
  });
  return News;
};

// export const subscribeOnChats = async (
//   user: IUser,
//   callback: (chats: IChat[]) => void,
// ) => {
//   const queryChats = await query(
//     collection(db, "chats"),
//     where("users", "array-contains", user.ref),
//   );

//   onSnapshot(queryChats, (snapshot: any) => {
//     const chats: IChat[] = [];
//     snapshot.forEach((doc: any) => {
//       chats.push({ ...doc.data(), uid: doc.id });
//     });

//     callback(chats);
//   });
// };

// const createNews = async (params: Partial<INews>) => {
//   return await addDoc(collection(db, "news"), params);
// };

export const News = () => {
  const [news, setNews] = useState<INews[]>([])
  fetchChats().then((data)=> {
    setNews(data)
  })
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {news ?
      news.map((data)=><Item item={data} key={data.uid}/>)
      : <div>null</div>}
    </Box>
  )
}
