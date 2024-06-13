import { Box, Typography } from "@mui/material"
import { CarouselWidget, carouselImageITem } from "../components/Carousel/Carousel"

export const Main = () => {
  return (
    <Box>
      <Box>
        <Box>
          <CarouselWidget Component={carouselImageITem} news={[{src: 'CesHdTdfRcs.jpg'},{src: 'd20RHq56_t8.jpg'},{src: 'KgluGGMeVnU.jpg'}]}/>
        </Box>
        <Typography sx={{
          p:1
        }}>
          Вы находитесь на страницах сайта Регионального отделения ДОСААФ России Свердловской области.
          <br/><br/>
          На протяжении всей истории существования оборонной организации страны осоавиахимовцы и досаафовцы Среднего Урала вносят большой вклад в укрепление обороноспособности нашего государства, военно-патриотическое воспитание населения, его подготовку к защите Отечества.
          <br/><br/>
          Эти традиции успешно продолжает и нынешнее поколение активистов и членов ДОСААФ, которые своим созидательным трудом укрепляют оборонную организацию Свердловской области, стремятся сделать её лучшей в стране. За годы деятельности Свердловской оборонной организацией были подготовлены тысячи призывников по военно-учетным специальностям и сотни тысяч специалистов массовых технических профессий, миллионы жителей получили здесь начальную военно-техническую подготовку, овладели многочисленными профессиями, необходимыми в военное время и в мирной жизни.
          <br/><br/>
          Сегодня, в условиях проведения специальной военной операции по демилитаризации и денацификации Украины, особенно важны наши совместные усилия по выполнению государственного оборонного заказа на подготовку специалистов для Вооруженных Сил России.
          <br/><br/>
          Приходите в наши учебные заведения, овладевайте востребованными в армии и на «гражданке» профессиями, стройте свою будущую жизнь вместе с ДОСААФ!
          <br/><br/>
        </Typography>

        <Typography sx={{
          p:1
        }}>
          Как вступить в ДОСААФ?
          <br/>
          – Ознакомиться с Уставом ДОСААФ России;
          <br/>
          – Заполнить заявление о приеме в ДОСААФ России;
          <br/>
          – Подать заявление в первичное отделение ДОСААФ России по месту жительства, работы или учебы;
          <br/>
          – Оплатить вступительный и членский взнос;
          <br/>
          – Получить членский билет (свидетельство юр. лица)
        </Typography>
      </Box>
    </Box>
  )
}
