import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { PropsWithChildren, useEffect } from "react";
import { fetchNews } from "../pages/News";
import dayjs from "dayjs";
import { setStore, store } from "../redux/redux";
import ScrollToTop from "react-scroll-up";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#534B52",
    },
    secondary: {
      main: "#F1F0EA",
    },
    info: {
      main: "#2D232E",
    },
  },
  components: {
    // MuiContainer: {
    //   defaultProps: {
    //     sx: {
    //       pt: 8
    //     }
    //   }
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});


export default function MainProvider({ children }: PropsWithChildren) {
  useEffect(()=>{
    fetchNews().then((data)=> {
      const updatedNews = data.map(newsItem => ({
        ...newsItem,
        createdAt: dayjs.unix(newsItem.createdAt ? newsItem.createdAt.seconds : 0).format('YYYY-MM-DD HH:mm')
      }));
      store.dispatch(setStore(updatedNews))
    }).catch((e)=>{
      console.log(e.message);
    })
  }, [])
  
  return (
    <>
      <Toaster position="top-right" />
        <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "flex",
                flexDirection: 'column'
              }}
            >
              {children}
              <ScrollToTop showUnder={160}>
                <KeyboardDoubleArrowUp sx={{
                  fontSize: {xs: 25, sm: 30}
                }}/>
              </ScrollToTop>
            </Box>
        </ThemeProvider>
    </>
  );
}
