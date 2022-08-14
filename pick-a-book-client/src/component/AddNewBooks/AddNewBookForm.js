import React from "react";
import { Box, Grid } from "@mui/material";
import {
  CancleButton,
  SendButton,
  TextFieldMake,
} from "../../style/MetariulUiStyle.js";
import ImagePdfButton from "./ImagePdfButton";

const AddNewBookForm = ({
  Data,
  setData,
  handelFormSubmit,
  image,
  setImage,

  Pdf,
  setPdf,
}) => {
  const Catagory = [
    {
      value: "উপন্যাসের বই",
      label: "উপন্যাসের বই",
    },
    {
      value: "ইসলামি উপন্যাস",
      label: "ইসলামি উপন্যাস",
    },
    {
      value: "সায়েন্স ফিকশন",
      label: "সায়েন্স ফিকশন",
    },
    {
      value: "ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স",
      label: "ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স",
    },
    {
      value: "Motivational and Meditation",
      label: "Motivational and Meditation",
    },
    {
      value: "অতিরিক্ত ছাড়",
      label: "অতিরিক্ত ছাড়",
    },
    {
      value: "গল্প",
      label: "গল্প",
    },
    {
      value: "বইমেলা ২০২২",
      label: "বইমেলা ২০২২",
    },
    {
      value: "দর্শন",
      label: "দর্শন",
    },
    {
      value: "মুক্তিযুদ্ধ",
      label: "মুক্তিযুদ্ধ",
    },

    {
      value: "বেস্টসেলার বই",
      label: "বেস্টসেলার বই",
    },

    {
      value: "ফ্রিল্যান্সিং প্রোগ্রামিং",
      label: "ফ্রিল্যান্সিং প্রোগ্রামিং",
    },
    {
      value: "পশ্চিমবঙ্গের বই",
      label: "পশ্চিমবঙ্গের বই",
    },
    {
      value: "রবীন্দ্রনাথ ঠাকুর",
      label: "রবীন্দ্রনাথ ঠাকুর",
    },
    {
      value: "শেষের কবিতা",
      label: "শেষের কবিতা",
    },
    {
      value: "সত্যজিৎ রায়",
      label: "সত্যজিৎ রায়",
    },
    {
      value: "মিসির আলি",
      label: "মিসির আলি",
    },
    {
      value: "ফেলুদা সমগ্র",
      label: "ফেলুদা সমগ্র",
    },
    {
      value: "জহির রায়হান",
      label: "জহির রায়হান",
    },
    {
      value: "অনুবাদ",
      label: "অনুবাদ",
    },
    {
      value: "গণিত",
      label: "গণিত",
    },
    {
      value: "থ্রিলার ও অ্যাডভেঞ্চার",
      label: "থ্রিলার ও অ্যাডভেঞ্চার",
    },
    {
      value: "রাজনীতি",
      label: "রাজনীতি",
    },
    {
      value: "ইতিহাস ও ঐতিহ্য",
      label: "ইতিহাস ও ঐতিহ্য",
    },
    {
      value: "ব্যবসা",
      label: "ব্যবসা",
    },
    {
      value: "অর্থনীতি",
      label: "অর্থনীতি",
    },
    {
      value: "ভ্রমণ",
      label: "ভ্রমণ",
    },
    {
      value: "প্রবাস",
      label: "প্রবাস",
    },
    {
      value: "প্রযুক্তি",
      label: "প্রযুক্তি",
    },
    {
      value: "কমিকস",
      label: "কমিকস",
    },
    {
      value: "কৃষি ও কৃষক",
      label: "কৃষি ও কৃষক",
    },
    {
      value: "ইংরেজি ভাষার বই",
      label: "ইংরেজি ভাষার বই",
    },
    {
      value: "আইন ও বিচার",
      label: "আইন ও বিচার",
    },
    {
      value: "College",
      label: "College",
    },
    {
      value: "Engg",
      label: "Engg",
    },
    {
      value: "Medicel",
      label: "Medicel",
    },
    {
      value: "Nursing",
      label: "Nursing",
    },
    {
      value: "School",
      label: "School",
    },
    {
      value: "University",
      label: "University",
    },
  ];

  const CoverType = [
    {
      value: "None",
      label: "None",
    },
    {
      value: "হার্ডকভার",
      label: "হার্ডকভার",
    },
    {
      value: "পেপারব্যাক",
      label: "পেপারব্যাক",
    },
  ];

  return (
    <Box component="form" onSubmit={(e) => handelFormSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <ImagePdfButton
            Data={Data}
            setData={setData}
            image={image}
            setImage={setImage}
            Pdf={Pdf}
            setPdf={setPdf}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            name="Book_Name"
            label="Book Name"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="Sub-Titel"
            label="Sub-Titel"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            name="Author_Name"
            label="Author Name"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            label="Price"
            type="number"
            name="Price"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            label="Catagory"
            name="Catagory"
            select
            focused
            SelectProps={{ native: "true" }}
            onClick={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          >
            <option>Select A Catagory</option>
            {Catagory.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            label="Cover Type"
            name="Cover_Type"
            select
            focused
            SelectProps={{ native: "true" }}
            onClick={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          >
            <option>Select A Cover Type</option>
            {CoverType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Offer Name"
            name="Offer_Name"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            required
            variant="outlined"
            label="Offer Percentage"
            type="number"
            name="Offer_Percentage"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            label="Stock"
            type="number"
            name="Stock"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            type="text"
            label="Publication Name"
            name="Publication_Name"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            required
            fullWidth
            variant="outlined"
            type="email"
            label="Admin Email"
            name="Email"
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="text"
            label="Decription"
            name="Description"
            multiline
            rows={4}
            onChange={(event) =>
              setData({
                ...Data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: {
            lg: "3%",
            xs: "6%",
          },
          textAlign: {
            lg: "end",
            xs: "center",
          },
        }}
      >
        <SendButton size="medium" type="submit">
          Submit
        </SendButton>
        <CancleButton onClick={() => setData(" ")} size="medium" type="reset">
          Cancel
        </CancleButton>
      </Box>
    </Box>
  );
};

export default AddNewBookForm;
