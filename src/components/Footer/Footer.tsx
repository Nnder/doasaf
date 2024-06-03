import { Box, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box sx={{
      width: '100vw',
      backgroundColor: 'primary.main',
      }}>
        <Typography sx={{
          color:'secondary.main'
        }}>
          Футер
        </Typography>
    </Box>
  )
}
