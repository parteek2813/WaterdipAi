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
const ServicesModal: React.FC<AboutUsProps> = ({ aboutUsOpen }) => {
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
            Our Services
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We offer Services in various domains like Data Engineering, Data
            Sciences, DataOps & MLOps And Acclerators
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Data Engineering:- Unlock unparalleled success through strategic
            insights, facilitated by our comprehensive data engineering
            solutions.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Data Science:- Achieve your business goals by providing insights
            into customer behavior, identifying trends, and predicting future
            outcomes with our end-to-end data science solutions.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            DataOps and MLOps:- Empowering Enterprises with Efficient DataOps &
            MLOps, Unveiling Strategic Insights for Seamless Progress.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Accelerate Your Success with Waterdip
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ServicesModal;
