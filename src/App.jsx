import { Box } from "@mui/material";
import {
  Header,
  Hero,
  TrustSection,
  BrandShowcase,
  AboutSection,
} from "./components";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Header />
      <Hero />
      <TrustSection />
      <BrandShowcase />
      <AboutSection />
    </Box>
  );
}

export default App;
