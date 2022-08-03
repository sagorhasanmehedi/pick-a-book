import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

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
    xs: 333,
  },
  overflowX: "hidden",
  overflowY: "scroll",
  height: {
    lg: "95%",
    xs: "70%",
  },
  display: "block",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

const PdfViewer = ({ pdf }) => {
  const [isMobile, setIsMobile] = useState(0);
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //choose the screen size for react pdf page responcivenes
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(700);
    } else if (window.innerWidth < 600) {
      setIsMobile(340);
    } else if (window.innerWidth < 768) {
      setIsMobile(500);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

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
            <Document
              className={"PDFDocument"}
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <Page
                  width={isMobile}
                  className={"PDFPage PDFPageOne"}
                  pageNumber={page}
                />
              ))}
            </Document>
          </center>
        </Box>
      </Modal>
    </div>
  );
};
export default PdfViewer;
