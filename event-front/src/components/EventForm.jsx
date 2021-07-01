import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import * as Yup from "yup";
import PropTypes from "prop-types";

const EventSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("Required"),
    lastName: Yup.string().trim().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date().required("Required"),
});

const useStyles = makeStyles({
    inputField: {
        margin: "5px"
    }
});

const EventForm = ({ handleAddEvent }) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            date: ""
        },
        validationSchema: EventSchema,
        onSubmit: values => {
            handleAddEvent(values);
            formik.resetForm();
        }
    });
    return (
        <form data-testid="event-form" onSubmit={formik.handleSubmit} className="formWrapper" autoComplete="off">
            <TextField
                fullWidth
                className={classes.inputField}
                id="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName} />
            <TextField
                fullWidth
                className={classes.inputField}
                id="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName} />
            <TextField
                fullWidth
                className={classes.inputField}
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
            <TextField
                fullWidth
                className={classes.inputField}
                id="date"
                label="Event Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
            />
            <Button fullWidth className={classes.inputField} variant="contained" color="primary" endIcon={<InsertInvitationIcon />} type="submit">Save</Button>
        </form>
    )
}

EventForm.propTypes = {
    handleAddEvent: PropTypes.func
}
export default EventForm
