import { Box } from "@mui/material";
import { Header, Hero, TrustSection } from "./components";

function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Hero />
      <TrustSection />
    </Box>
  );
}

export default App;
