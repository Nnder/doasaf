import { Box } from "@mui/system"
import { INews } from "../../types/News"
import { Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

export const Item: FC<{item: INews<string>}> = ({item}) => {
  return (
      <Paper sx={{
        m: 1,
        p: 1,
        width:'100%'
      }}>
        <Link to={`/news/${item.uid}`} style={{textDecoration: 'none', color:'black'}}>
          <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column', md: 'row'}
          }}>
            <Box sx={{
              maxWidth: 600,
              width: {xs: '100%', md: '50%'},
              height: {xs: 300, md: 300},
            }}>
              <img src={item.imgs[0]} height={"100%"} width={"100%"}/>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {xs: '100%', md:'50%'},
              p:1
            }}>
              <Typography sx={{
                  fontSize: {xs: 16, sm: 17, md: 18, lg: 19, xl: 20},
                  textAlign: "left",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  overflowWrap: "anywhere",
                  m:1
                }}>
                {item.header}
              </Typography>

              <Typography sx={{
                  fontSize: {xs: 12, sm: 13, md: 14, lg: 15, xl: 16},
                  textAlign: "left",
                  display: "-webkit-box",
                  WebkitLineClamp: {xs: 2, sm: 2, md:8, lg: 6},
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  overflowWrap: "anywhere",
                  m:1
                }}>
                {item.text}
              </Typography>
              <Typography sx={{
                textAlign: "left",
                width: '100%',
                fontSize: {xs: 12, sm: 13, md: 14, lg: 15, xl: 16},
                pl:1
              }}>
                {item.createdAt}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Paper>
  )
}
