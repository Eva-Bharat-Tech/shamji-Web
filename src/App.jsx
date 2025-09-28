import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Add, Remove, Refresh } from "@mui/icons-material";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shamji Web - Material-UI Setup
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="center" gap={2} mb={4}>
          <img
            src={viteLogo}
            alt="Vite logo"
            style={{ height: "6em", padding: "1.5em" }}
          />
          <img
            src={reactLogo}
            alt="React logo"
            style={{ height: "6em", padding: "1.5em" }}
          />
        </Box>

        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Vite + React + Material-UI
        </Typography>

        <Card sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="div" gutterBottom>
              Counter: {count}
            </Typography>

            <Box
              sx={{ mt: 3, display: "flex", gap: 1, justifyContent: "center" }}
            >
              <IconButton
                color="primary"
                onClick={() => setCount(count - 1)}
                aria-label="decrease"
              >
                <Remove />
              </IconButton>

              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
                sx={{ minWidth: 120 }}
              >
                Count: {count}
              </Button>

              <IconButton
                color="primary"
                onClick={() => setCount(count + 1)}
                aria-label="increase"
              >
                <Add />
              </IconButton>
            </Box>

            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={() => setCount(0)}
              sx={{ mt: 2 }}
            >
              Reset
            </Button>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Edit <code>src/App.jsx</code> and save to test HMR
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="body1" textAlign="center" sx={{ mt: 4, mb: 2 }}>
          Material-UI is now set up! You can use components like:
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
