import { Box } from "@mui/material";
import {
  Header,
  Hero,
  TrustSection,
  BrandShowcase,
  AboutSection,
  ServicesSection,
  FAQSection,
  CTASection,
  Footer,
} from "./components";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Header />
      <Hero />
      <TrustSection />
      <BrandShowcase />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </Box>
  );
}

export default App;
