import { Box, Paper, Typography } from "@mui/material"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import Carousel from "react-material-ui-carousel"
import { setStore, store } from "../redux/redux"
import { useParams } from "react-router-dom"
import { Item } from "../components/News/Item"
import { INews } from "../types/News"
import { fetchNews } from "./News"
import dayjs from "dayjs"
export const CurrentNews: FC<{}> = () => {
  const { id } = useParams();
  const [news, setNews] = useState<INews<string>[]>([])
  const [currentNews, setCurrentNews] = useState<INews<string> | undefined>()

  useEffect(()=>{
    fetchNews().then((data)=> {
      const updatedNews = data.map(newsItem => ({
        ...newsItem,
        createdAt: dayjs.unix(newsItem.createdAt ? newsItem.createdAt.seconds : 0).format('YYYY-MM-DD HH:mm')
      }));
      store.dispatch(setStore(updatedNews))
      setNews(store.getState().news)
      setCurrentNews(news.find((item)=>item.uid === id) || undefined)
    }).catch((e)=>{
      console.log(e.message);
    })
  }, [id])

  useEffect(()=>{
    setCurrentNews(news.find((item)=>item.uid === id) || undefined)
  }, [news])

  useEffect(()=>{
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [id])
  
  if(currentNews){
    return (
      <Box>
        <Box>
          <Carousel sx={{m:1}} interval={10000} animation="slide">
            {currentNews.imgs.map((img, index)=><ImageComponent key={index} src={img} alt={img}/>)}
          </Carousel>
        </Box>
        <Box>
          <Typography sx={{
            fontSize: {xs: 16, sm: 17, md: 18, lg: 19, xl: 20},
            p: 1
          }}>
            {currentNews.header}
          </Typography>
          <Typography sx={{
            fontSize: {xs: 12, sm: 13, md: 14, lg: 15, xl: 16},
            textAlign: 'justify',
            p: 1
          }}>
            {currentNews.text}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{
            fontSize: {xs: 16, sm: 17, md: 18, lg: 19, xl: 20},
            textAlign: 'center'
          }}>
            Последние новости
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {[...news.slice(0,5)].map((n)=> <Item item={n} key={n.uid}/>)}
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{
      textAlign: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography>
        ...Загрузка
      </Typography>
    </Box>
  )
}


const ImageComponent = ({src, alt}: PropsWithChildren<{src: string, alt: string}>)=>{
  return (
    <Paper sx={{
      p:1,
    }}>
      <Box sx={{
        width: '100%',
        height: {xs: 300, sm: 350, md: 450, lg:500, xl: 650},
      }}>
        <img src={src} height={'100%'} width={'100%'} alt={alt || "картинка"}/>
      </Box>
    </Paper>
  )
}
