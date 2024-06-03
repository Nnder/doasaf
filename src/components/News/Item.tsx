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
      minWidth: 200,
      maxWidth: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography sx={{
            fontSize: 20,
            textAlign: "left",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            overflowWrap: "anywhere",
          }}>
          {item.header}
        </Typography>

        <Typography sx={{
            fontSize: 16,
            textAlign: "left",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            overflowWrap: "anywhere",
          }}>
          {item.text}
        </Typography>
        <Typography sx={{
          textAlign: "right",
          width: '100%',
        }}>
          {date}
        </Typography>
      </Box>
    </Paper>
  )
}
