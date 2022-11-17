import * as yup from "yup";
import { ArrowBack, Check } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AppBarComponent from "../../components/app-bar";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slice/categories/asyncThunk";
import CardRadioComponent from "../../components/card-radio";

const validationSchema = yup.object({
  id: yup.number(),
  name: yup
    .string()
    .max(15, "A maximum of 15 characters is allowed!")
    .required("The title should not be left blank!")
    .trim(),
  color: yup.string().required(),
});

const NewCategoryContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: undefined,
      name: "",
      color: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = JSON.stringify(values);
      dispatch(add(JSON.parse(data)));
      navigate(-1);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box pt={9}>
        <form onSubmit={formik.handleSubmit}>
          <AppBarComponent
            title="New Category"
            startAction={
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowBack />
              </IconButton>
            }
            endAction={
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="submit"
                type="submit"
              >
                <Check />
              </IconButton>
            }
          />
          <Stack spacing={2}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
            />
            <FormControl
              required
              error={formik.touched.color && Boolean(formik.errors.color)}
            >
              <FormLabel id="color">Choose a color</FormLabel>
              <RadioGroup
                aria-labelledby="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                sx={{
                  paddingTop: "0.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                }}
              >
                <CardRadioComponent label="Purple-Blue" value="#ddb4f6, #8dd0fc" />
                <CardRadioComponent label="Orange" value="#f1e1c2, #fcbc98" />
                <CardRadioComponent label="Gray" value="#727a9a, #d8dbe9" />
                <CardRadioComponent label="Red" value="#ff5858, #ffc8c8" />
                <CardRadioComponent label="Blue" value="#595cff, #c6f8ff" />
                <CardRadioComponent label="Colorful" value="#84ffc9, #aab2ff, #eca0ff" />
              </RadioGroup>
              <FormHelperText>
                {formik.touched.color && formik.errors.color}
              </FormHelperText>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default NewCategoryContainer;
