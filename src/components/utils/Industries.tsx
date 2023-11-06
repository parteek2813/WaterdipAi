import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface AboutUsProps {
  aboutUsOpen: boolean;
}
const IndustriesModal: React.FC<AboutUsProps> = ({ aboutUsOpen }) => {
  return (
    <div>
      <Modal
        open={aboutUsOpen}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Industries We Works
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We work in industries like E-Commerce, Finance and HealthCare
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            E-Commerce:- Catapult your e-commerce domain into the future with
            our pioneering Data Solutions, where technology and innovation
            converge to craft personalized experiences and fuel strategic
            excellence.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Finance:- Navigate the financial landscape with data mastery,
            elevating decision-making and maximizing returns through the power
            of insights.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Healthcare:- Elevate patient well-being through data-driven care,
            shaping a healthier tomorrow with precision insights and
            personalized solutions
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default IndustriesModal;
