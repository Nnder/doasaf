import { Button, Paper } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import { FC } from "react"


export const CarouselWidget: FC<{news: any[]}> = ({news}) => {
  return (
    <Carousel>
      {
        news.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props:any)
{
    return (
        <Paper>
          <h2>{props.item.header}</h2>

          <Button className="CheckButton">
            Check it out!
          </Button>
        </Paper>
    )
}
