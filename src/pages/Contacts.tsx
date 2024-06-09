import { Box, Paper, Typography } from "@mui/material"

export const Contacts = () => {
  return (
    <Box>
      <Typography textAlign='center' sx={{
        fontSize: 30
      }}>
        Контакты
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Paper elevation={16} sx={{
          width: '200px',
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m:1,
        }}>
          <Typography textAlign='center'>
            Адрес: 620014, <br/>
            г. Екатеринбург ул. Малышева 31-д/6<br/>
          </Typography>
        </Paper>

        <Paper elevation={16} sx={{
          width: '200px',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m:1,
        }}>
          <Typography textAlign='center'>
            Часы работы: <br/>
            9:00 — 18.00 <br/>
            Понедельник — Четверг<br/>
            9:00 — 16.45<br/> Пятница<br/>
            Контакты<br/>
          </Typography>
        </Paper>

        <Paper elevation={16} sx={{
          width: '200px',
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m:1,
        }}>
          <Typography textAlign='center'>        
            Тел.: 371-45-42 (доб.201)<br/>
            Email: soo-rosto@mail.ru<br/>
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Typography sx={{
          p:1
        }}>
          В 2008 г. Коллегией Российского государственного военного историко-культурного центра при Правительстве Российской Федерации Свердловская областная организация ДОСААФ награждена почетным знаком «За активную работу по патриотическому воспитанию граждан Российской Федерации».
          <br/><br/>
          За год наша организация успевает подготовить более 20 тысяч специалистов массовых технических профессий. Свердловская оборонная хранит и преумножает лучшие традиции добровольного общества содействия армии, авиации и флоту, являясь достойным преемником своих предшественников.
          <br/><br/>
          В спортивных бесплатных секциях при учебных организациях и спортивно-технических клубах занимаются около 3000 человек. Наибольшей популярностью пользуются автомобильный, мотоциклетный, водно-моторный, парашютный, стрелковый, авиамодельный виды спорта.
          <br/><br/>
          Сильнейшими в стране стали команды Свердловской области по скоростному плаванию в ластах, авиамодельному спорту, картингу, морскому многоборью, судомодельному и водно-моторному спорту.
        </Typography>
      </Box>
    </Box>
  )
}
