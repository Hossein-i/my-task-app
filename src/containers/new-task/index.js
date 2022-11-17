import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/slice/tasks/asyncThunk";
import * as yup from "yup";
import { useFormik } from "formik";
import moment from "moment";
import { Box, Container, IconButton, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { ArrowBack, Check } from "@mui/icons-material";
import AppBarComponent from "../../components/app-bar";
import DateTimePickerComponent from "../../components/date-time-picker";
import DatePickerComponent from "../../components/date-picker";
import SelectComponent from "../../components/select";

const validationSchema = yup.object({
  id: yup.number(),
  categoryId: yup.number().required(),
  title: yup
    .string()
    .max(25, "A maximum of 25 characters is allowed!")
    .required("The title should not be left blank!")
    .trim(),
  completed: yup.boolean(),
  remindAt: yup.date(),
  dueDate: yup.date().required(),
  repeat: yup.string(),
  note: yup.string().trim(),
  createdAt: yup.date(),
  editedAt: yup.date(),
});

const NewTaskContainer = () => {
  const { categories, isLoading } = useSelector((store) => store.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: undefined,
      categoryId: 3,
      title: "",
      completed: false,
      remindAt: "",
      dueDate: moment().toISOString(),
      repeat: "",
      note: "",
      createdAt: moment().toISOString(),
      editedAt: moment().toISOString(),
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
            title="New Task"
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
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
            {!isLoading && (
              <SelectComponent
                name="categoryId"
                label="Category"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                items={categories}
                error={
                  formik.touched.categoryId && Boolean(formik.errors.categoryId)
                }
                helperText={
                  formik.touched.categoryId && formik.errors.categoryId
                }
                required
              />
            )}
            <DateTimePickerComponent
              name="remindAt"
              label="Remind me"
              value={formik.values.remindAt}
              helperText={formik.touched.remindAt && formik.errors.remindAt}
              error={formik.touched.remindAt && Boolean(formik.errors.remindAt)}
              onClear={() => formik.setFieldValue("remindAt", "")}
              onChange={(value) =>
                formik.setFieldValue(
                  "remindAt",
                  value === null ? "" : moment(value)
                )
              }
              minDateTime={moment()}
            />
            <DatePickerComponent
              name="dueDate"
              label="Add due date"
              value={formik.values.dueDate}
              helperText={formik.touched.dueDate && formik.errors.dueDate}
              error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
              onChange={(value) =>
                formik.setFieldValue("dueDate", moment(value))
              }
              minDate={moment()}
              required
            />
            <TextField
              id="note"
              name="note"
              label="Note"
              multiline
              rows={5}
              value={formik.values.note}
              onChange={formik.handleChange}
              error={formik.touched.note && Boolean(formik.errors.note)}
              helperText={formik.touched.note && formik.errors.note}
            />
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default NewTaskContainer;
