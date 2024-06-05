import { Box } from "@mui/material"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../shared/firebase";
import { DateTime, INews } from "../types/News";
import {useEffect, useState } from "react";
import { Item } from "../components/News/Item";
import { CarouselWidget, MainCarouselItem } from "../components/Carousel/Carousel";
import { setStore, store} from "../redux/redux";
import dayjs from "dayjs";

export const fetchChats = async () => {
  const queryChats = await query(
    collection(db, "news"),
  );

  const News: INews<DateTime>[] = [];

  const querySnapshot = await getDocs(queryChats);
  querySnapshot.forEach((doc) => {
    News.push({ ...doc.data(), uid: doc.id } as INews<DateTime>);
  });
  return News;
};

export const News = () => {
  const [news, setNews] = useState<INews<string>[]>([])

  useEffect(()=>{
    fetchChats().then((data)=> {
      const updatedNews = data.map(newsItem => ({
        ...newsItem,
        createdAt: dayjs.unix(newsItem.createdAt ? newsItem.createdAt.seconds : 0).format('YYYY-MM-DD HH:mm')
      }));
      store.dispatch(setStore(updatedNews))
    }).catch((e)=>{
      console.log(e.message);
    })
  }, [])

  store.subscribe(() => {
    console.log('store')
    setNews(store.getState().news)
  })
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <Box sx={{
        mb:1
      }}>
        <CarouselWidget Component={MainCarouselItem} news={[...news.slice(0,5)]}/>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {news ?
        [...news.slice(5)].map((data)=><Item item={data} key={data.uid}/>)
        : <div>null</div>}
      </Box>
      
    </Box>
  )
}
