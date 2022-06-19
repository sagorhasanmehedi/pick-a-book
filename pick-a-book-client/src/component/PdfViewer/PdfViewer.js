import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../../assets/pdf/বাংলা ছোটগল্প রবীন্দ্রনাথ ঠাকুর.pdf"

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <div>
            
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
};

export default PdfViewer;