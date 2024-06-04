import { Box } from "@mui/system"
import { INews } from "../../types/News"
import { Paper, Typography } from "@mui/material"
import { FC } from "react"
import dayjs from "dayjs"


export const Item: FC<{item: INews}> = ({item}) => {
  const date: string = dayjs.unix(item.createdAt.seconds).format('YYYY-MM-DD HH:mm')
  return (
    <Paper sx={{
      m: 1,
      p: 1,
      width:'100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography sx={{
            fontSize: {xs: 14, sm: 15, md: 16, lg: 17, xl: 18},
            textAlign: "left",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            overflowWrap: "anywhere",
          }}>
          {item.header}
        </Typography>

        <Typography sx={{
            fontSize: {xs: 12, sm: 13, md: 14, lg: 15, xl: 16},
            textAlign: "left",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            overflowWrap: "anywhere",
          }}>
          {item.text}
        </Typography>
        <Typography sx={{
          textAlign: "right",
          width: '100%',
          fontSize: {xs: 12, sm: 13, md: 14, lg: 15, xl: 16},
        }}>
          {date}
        </Typography>
      </Box>
    </Paper>
  )
}
