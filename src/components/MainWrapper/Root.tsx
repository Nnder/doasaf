import { useOutlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { Main } from "../../pages/Main";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const Root = () => {
  const outlet = useOutlet()
  return (
    <Box sx={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Navbar/>
      <Box sx={{
          m:{xs: 0, sm: 1},
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Paper elevation={16} sx={{
          p:{xs:0,sm:1},
          py:{xs:1},
          width: {xs:'100%', sm:'590px', md: '800px', lg: '1150px', xl: '1300px'}
        }}>
          {outlet || <Main/>}
        </Paper>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Root