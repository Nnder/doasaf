import { Box, Paper, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import { FC } from "react"
import { Link } from "react-router-dom"


export const CarouselWidget: FC<{news: any[]}> = ({news}) => {
  return (
    <Carousel sx={{
      m:1
    }}
    interval={10000} animation="slide"
    >
      {
        news.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props:any)
{
    return (
        <Paper sx={{
          p:1,
        }}>
          <Box sx={{
            width: '100%',
            height: {xs: 300, sm: 350, md: 450, lg:500, xl: 650},
          }}>
            <img src="1.jpg" height={'100%'} width={'100%'}/>
          </Box>
          <Link to={`news/${props.item.uid}`}>
            <Typography sx={{
              fontSize: {xs: 18, sm: 19, md: 20, lg: 21, xl: 22},
              textAlign: "left",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              overflowWrap: "anywhere",
            }}>
              {props.item.header}
            </Typography>
          </Link>
        </Paper>
    )
}
