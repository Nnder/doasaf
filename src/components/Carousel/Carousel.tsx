import { Box, Paper, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import { FC } from "react"
import { Link } from "react-router-dom"
import { INews } from "../../types/News"

export const CarouselWidget: FC<{news: any[], Component:FC<{item: INews}>}> = ({news, Component}) => {
  return (
    <Carousel sx={{
      m:1
    }}
    interval={10000} animation="slide"
    >
      {
        news.map( (item, i) => <Component key={i} item={item} /> )
      }
    </Carousel>
  )
}

export const MainCarouselItem: FC<{item: INews}>  = ({item}) =>
{
  return (
    <Paper sx={{
      p:1,
    }}>
      <Box sx={{
        width: '100%',
        height: {xs: 300, sm: 350, md: 450, lg:500, xl: 650},
      }}>
        <img src={item.imgs[0] || ""} height={'100%'} width={'100%'} alt={item.imgs[0] || "картинка"}/>
      </Box>
      <Link to={`/news/${item.uid}`}>
        <Typography sx={{
          fontSize: {xs: 18, sm: 19, md: 20, lg: 21, xl: 22},
          textAlign: "left",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          overflowWrap: "anywhere",
        }}>
          {item.header}
        </Typography>
      </Link>
    </Paper>
  )
}

export const NewsCarouselItem: FC<{item: INews}>  = ({item}) =>
  {
    return (
      <Box sx={{
        width: '100%',
        height: {xs: 300, sm: 350, md: 450, lg:500, xl: 650},
      }}>
         <img src={item.imgs[0] || ""} height={'100%'} width={'100%'} alt={item.imgs[0] || "картинка"}/>
      </Box>
    )
  }
