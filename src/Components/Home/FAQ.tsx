import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import HeaderTitle from "../shared/HeaderTitle";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../../DummyData/faq";
const FAQ = () => {
  return (
    <div className="py-10 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeaderTitle BText="Frequently Asked" CText="Questions" />
      <div className="mt-5">
        {faqs?.map((faq,index) => (
          <Accordion key={index} >
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
