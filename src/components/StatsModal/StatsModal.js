import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function StatsModal({ open, setOpen, stats }) {
  const handleClose = () => setOpen(false);

  console.log(stats);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          Stats
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          One day volume: {stats.one_day_volume}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Average price: {stats.average_price}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          count: {stats.count}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Floor price: {stats.floor_price}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Market cap: {stats.market_cap}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Num owners: {stats.num_owners}
        </Typography>
      </Box>
    </Modal>
  );
}
