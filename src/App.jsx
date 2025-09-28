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
import OurBeatifulWork from "./assets/OurBeatifulWork.png";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Header />
      <Hero />
      <TrustSection />
      <BrandShowcase />
      <AboutSection />
      <img
        src={OurBeatifulWork}
        style={{ width: "100%", height: "auto" }}
        alt="Services"
      />
      <ServicesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </Box>
  );
}

export default App;
