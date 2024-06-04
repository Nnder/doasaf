import { Box } from "@mui/material"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../shared/firebase";
import { INews } from "../types/News";
import { useEffect, useState } from "react";
import { Item } from "../components/News/Item";
import { CarouselWidget } from "../components/Carousel/Carousel";


const timeData: any[] = [
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "1"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "2"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "3"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "4"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "5"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "6"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "7"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "8"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "9"
  },
  {
    createdAt: {seconds: 1000000, miliseconds: 100000000},
    header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    imgs:[],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis rerum illum. Voluptates excepturi dolores numquam, eius repudiandae quo itaque, quibusdam error, beatae libero odit quam labore natus assumenda. Incidunt.",
    uid: "10"
  },
]


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

export const News = () => {
  const [news, setNews] = useState<INews[]>([])

  useEffect(()=>{
    fetchChats().then((data)=> {
      setNews(data)
    }).catch((e)=>{
      console.log(e.message);
      setNews(timeData)
    })
  }, [])
  
  
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
        <CarouselWidget news={[...news.slice(0,5)]}/>
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
