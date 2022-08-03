import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { UplodeButton } from "../../style/MetariulUiStyle";

const ImagePdfButton = ({ Data, setData, image, setImage, Pdf, setPdf }) => {
  const [preview, setPreview] = useState();

  const imageref = useRef();
  const Pdfef = useRef();

  // image preview
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [image]);

  // handel input image
  const handelInputImage = (e) => {
    const file = e.target.files[0];
    setData({
      ...Data,
      [e.target.name]: e.target.files[0],
    });
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handelInputPdf = (e) => {
    const file = e.target.files[0];
    setPdf(file);
    setData({
      ...Data,
      [e.target.name]: e.target.files[0],
    });
  };

  // handel preview button
  const handelPreviewButton = (e) => {
    e.preventDefault();
    imageref.current.click();
  };
  const handelPdfPreviewButton = (e) => {
    e.preventDefault();
    Pdfef.current.click();
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, lg: 4 }}
      alignItems={{ lg: "flex-end" }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <img
          src={
            preview
              ? preview
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
          }
          alt=""
          srcSet=""
          style={{
            objectFit: "cover",
            width: "140px",
            height: "210px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          gap: 3,
        }}
      >
        {preview ? (
          <UplodeButton onClick={() => setPreview(null)}>CANCEL</UplodeButton>
        ) : (
          <UplodeButton onClick={handelPreviewButton}>COVER IMAGE</UplodeButton>
        )}

        <input
          style={{ display: "none" }}
          name="Image"
          type="file"
          accept="image/*"
          ref={imageref}
          onChange={handelInputImage}
        />

        <UplodeButton onClick={handelPdfPreviewButton}>ADD PDF</UplodeButton>
      </Box>

      <Typography textAlign={"center"} variant="h6" color="secondary">
        {Pdf?.name}
      </Typography>
      <input
        style={{ display: "none" }}
        type="file"
        name="Pdf"
        accept=".Pdf,.doc"
        ref={Pdfef}
        onChange={handelInputPdf}
      />
    </Stack>
  );
};

export default ImagePdfButton;
