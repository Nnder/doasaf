import { Box, Paper } from "@mui/material"
import { FC, PropsWithChildren } from "react"
import Carousel from "react-material-ui-carousel"

export const CurrentNews: FC<{}> = () => {
  return (
    <Box>
      <Carousel sx={{
      m:1
        }}
        interval={10000} animation="slide"
        >
        {
          <ImageComponent src="" alt=""/>
        }
      </Carousel>
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
