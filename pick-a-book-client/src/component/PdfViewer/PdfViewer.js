import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 700,
    xs: 350,
  },
  overflow: "scroll",
  height: "95%",
  display: "block",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="pore-dekhun-buttomn">
        একটু পড়ে দেখুন
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <Page width={600} pageNumber={page} />
              ))}
            </Document>
          </center>
        </Box>
      </Modal>
    </div>
  );
};
export default PdfViewer;
