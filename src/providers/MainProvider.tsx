import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";
// import AuthProvider from "./AuthProvider";
import { PropsWithChildren } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#201E1F",
    },
    secondary: {
      main: "#FEEFDD",
    },
    info: {
      main: "#FF4000",
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
  return (
    <>
      <Toaster position="top-right" />
        <ThemeProvider theme={theme}>
          {/* <AuthProvider> */}
            <Box
              sx={{
                display: { xs: "block", sm: "grid" },
                gridTemplateColumns: "auto 1fr",
              }}
            >
              {children}
            </Box>
          {/* </AuthProvider> */}
        </ThemeProvider>
    </>
  );
}
