import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
const BasicModal: React.FC<AboutUsProps> = ({ aboutUsOpen }) => {
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
            About Us
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Welcome to Waterdip, a cutting-edge technology-driven organization
            dedicated to revolutionizing the world of data and analytics.
            Established in 2022, we have quickly risen to prominence as a
            trusted leader in the field of data science, machine learning, and
            artificial intelligence.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            At Waterdip, we firmly believe that data is the driving force behind
            informed decision-making and business success. With a team of
            passionate data scientists, engineers, and experts, we strive to
            unlock the full potential of data, empowering businesses to gain
            actionable insights and make data-driven decisions.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
