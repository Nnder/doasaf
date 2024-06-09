import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const pages = [{path:'/news', name:'Новости'}, {path:'/newRecord', name:'Запись на обучение'}, {path:'/learn', name:'Занятия'}, {path:'/drop', name:'Прыжки с парашютом'}, {path:'/contacts', name:'Контакты'}];

export const Footer = () => {
  return (
    <Box sx={{
      width: '100vw',
      backgroundColor: 'primary.main',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      flexDirection: 'column',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: {xs:'column', md: 'row'},
      }}>
        {pages.map((page, index) => (
          <Link to={page.path} key={index}>
            <Typography  sx={{
              color:'secondary.main',
              m:1,
              p:1,
            }}>
              {page.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box>
        <Typography textAlign='center' sx={{
          color:'secondary.main',
          py:1,
          m:1,
        }}>
          ДОСААФ 2024 Все права защищены
        </Typography>
      </Box>
    </Box>
  )
}
