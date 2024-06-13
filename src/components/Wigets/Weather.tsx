import { Box, Paper, Typography } from "@mui/material"
import axios from "axios"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

const getWeather = async ()=>{
  const url = 'https://weather.algobook.info/forecast/Nizhniy%20Tagil'
  const response = await axios.get(url)
  return response
}

export const Weather = () => {
  const [weather, setWeather] = useState<any>({})

  useEffect(()=>{
    getWeather().then((d: any)=>setWeather(d.data))
  }, [])

  console.log(weather)

  return (
    <Box sx={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Paper elevation={16} sx={{
        p:{xs:0,sm:1},
        py:{xs:1},
        mb:1,
        width: {xs:'100%', sm:'590px', md: '800px', lg: '1150px', xl: '1300px'},
      }}>
          <Typography textAlign={'center'} sx={{
            m:1,
            fontSize: {xs: 16, sm: 17, md: 18, lg: 19, xl: 20},
            }}>
            Погода
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {weather?.city ? 
            weather.forecast.map((data: any, i:number)=><WeatherItem key={data.day} data={data} i={i}/>)
            : '...Загрузка погоды'}
          </Box>

      </Paper>
    </Box>
    
  )
}

export const WeatherItem = ({data, i}: {data: any, i: number}) => {
  return (
    <Paper elevation={16} sx={{
      m:1,
      p: i === 0 ? 0.9 : 1,
      border: i === 0 ? "1px solid blue" : 'none',
    }}>
      <Box sx={{
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box>
          <Typography>
            Дата: {dayjs(data.day || 0).format('YYYY-MM-DD')}
          </Typography>
          <Typography>
            Темп: от {data.minTempCelsius}° до {data.maxTempCelsius}°
          </Typography>
          <Typography>
            Скорость ветра: {data.windAverageKmh}
          </Typography>
        </Box>
        
      </Box>
    </Paper>
  )
}
