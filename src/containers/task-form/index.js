import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { put, remove } from "../../redux/slice/tasks/asyncThunk";
import * as yup from "yup";
import { useFormik } from "formik";
import moment from "moment";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ArrowBack, Check, Delete } from "@mui/icons-material";
import AppBarComponent from "../../components/app-bar";
import DateTimePickerComponent from "../../components/date-time-picker";
import DatePickerComponent from "../../components/date-picker";
import SelectComponent from "../../components/select";
import AlertDialogComponent from "../../components/alert-dialog";
import { useState } from "react";

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

const TaskFormContainer = ({ task }) => {
  const { categories, isLoading } = useSelector((store) => store.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: task.id,
      categoryId: task.categoryId,
      title: task.title,
      completed: task.completed,
      remindAt: task.remindAt,
      dueDate: task.dueDate,
      repeat: task.repeat,
      note: task.note,
      createdAt: task.createdAt,
      editedAt: moment().toISOString(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = JSON.stringify(values);
      dispatch(put(JSON.parse(data)));
      navigate(-1);
    },
  });

  const handleClose = (agree) => {
    setIsOpenDialog(false);

    if (agree) {
      dispatch(remove(task.id));
      navigate(-1);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <AppBarComponent
        title={task.title}
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
            helperText={formik.touched.categoryId && formik.errors.categoryId}
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
          onChange={(value) => formik.setFieldValue("dueDate", moment(value))}
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

      <Stack spacing={1} py={2}>
        <Typography variant="caption">
          {moment(task.createdAt).format() ===
          moment(task.editedAt).format() ? (
            <>
              Created on{" "}
              {moment(task.createdAt).format("DD MMMM, YYYY - hh:mm A")}
            </>
          ) : (
            <>
              Edited on{" "}
              {moment(task.editedAt).format("DD MMMM, YYYY - hh:mm A")}
            </>
          )}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          aria-label="delete"
          startIcon={<Delete />}
          onClick={() => {
            setIsOpenDialog(true);
          }}
        >
          Delete Task
        </Button>
      </Stack>
      <AlertDialogComponent
        open={isOpenDialog}
        labelAgree="Delete"
        labelDisagree="Cancel"
        colorAgree="error"
        onClose={handleClose}
        title="Delete task"
        description={`"${task.title}" will be permanently deleted.`}
      />
    </form>
  );
};

export default TaskFormContainer;
