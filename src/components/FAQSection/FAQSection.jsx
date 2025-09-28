import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from "@mui/material";
import { ExpandMore, Send } from "@mui/icons-material";
import {
  ResponsiveContainer,
  ResponsiveSection,
  ResponsiveGrid,
  ResponsiveGridContainer,
  useResponsive,
} from "../index";
import FAQ from "../../assets/FAQ.svg";
const FAQSection = () => {
  const { isMobile } = useResponsive();
  const [expanded, setExpanded] = useState(false);
  const [contactForm, setContactForm] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // FAQ data
  const faqs = [
    {
      id: "panel1",
      question: "How effective is outdoor advertising for my brand visibility?",
      answer: "",
    },
    {
      id: "panel2",
      question: "Do you provide customized ad campaigns?",
      answer:
        "Yes, we design every campaign around your unique goals, audience, and budget.",
    },
    {
      id: "panel3",
      question: "Can Shyamji Advertisement handle end-to-end campaigns?",
      answer: "",
    },
    {
      id: "panel4",
      question: "Am I safe leaving my company in your hands?",
      answer: "",
    },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", contactForm);
  };

  return (
    <ResponsiveSection
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <ResponsiveContainer>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, sm: 8, md: 10 }, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "text.primary",
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "3.5rem",
                lg: "4rem",
              },
              mb: 2,
            }}
          >
            FAQ's
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 400,
            }}
          >
            Providing answers to your questions
          </Typography>
        </Box>

        {/* Main Content Grid */}
        <ResponsiveGridContainer spacing={{ xs: 4, sm: 6, md: 8 }}>
          {/* Left Column - FAQ Illustration */}
          <ResponsiveGrid xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: { xs: 250, sm: 300, md: 400 },
              }}
            >
              <img
                src={FAQ}
                alt="FAQ Illustration"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
            </Box>
          </ResponsiveGrid>

          {/* Right Column - FAQ Accordions */}
          <ResponsiveGrid xs={12} md={7}>
            <Box>
              {/* FAQ Accordions */}
              <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
                {faqs.map((faq) => (
                  <Accordion
                    key={faq.id}
                    expanded={expanded === faq.id}
                    onChange={handleChange(faq.id)}
                    sx={{
                      mb: 2,
                      borderRadius: "12px !important",
                      backgroundColor: expanded === faq.id ? "#000" : "#000",
                      color: "white",
                      "&:before": {
                        display: "none",
                      },
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMore sx={{ color: "white", fontSize: 24 }} />
                      }
                      sx={{
                        backgroundColor: "#000",
                        borderRadius: "12px",
                        minHeight: { xs: 60, sm: 70, md: 80 },
                        px: { xs: 2, sm: 3, md: 4 },
                        py: { xs: 1, sm: 1.5 },
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white",
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    {faq.answer && (
                      <AccordionDetails
                        sx={{
                          backgroundColor: "#000",
                          borderRadius: "0 0 12px 12px",
                          px: { xs: 2, sm: 3, md: 4 },
                          py: { xs: 2, sm: 3 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            fontSize: {
                              xs: "0.85rem",
                              sm: "0.9rem",
                              md: "1rem",
                            },
                            lineHeight: 1.5,
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    )}
                  </Accordion>
                ))}
              </Box>

              {/* Contact Form */}
              <Box
                component="form"
                onSubmit={handleContactSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  multiline
                  rows={4}
                  placeholder="Ask us what you want to know..."
                  value={contactForm}
                  onChange={(e) => setContactForm(e.target.value)}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "background.paper",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      "& fieldset": {
                        borderColor: "grey.300",
                        borderWidth: 2,
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "text.secondary",
                      opacity: 0.7,
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 2, sm: 0 },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      order: { xs: 2, sm: 1 },
                    }}
                  >
                    We will answer your questions via email within 48 hours.
                  </Typography>

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      borderRadius: 3,
                      px: { xs: 4, sm: 5 },
                      py: { xs: 1.5, sm: 1.8 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: 2,
                      order: { xs: 1, sm: 2 },
                      minWidth: { xs: "100%", sm: "auto" },
                      "&:hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </ResponsiveGrid>
        </ResponsiveGridContainer>
      </ResponsiveContainer>
    </ResponsiveSection>
  );
};

export default FAQSection;
