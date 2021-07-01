import { Alert } from "@material-ui/lab";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    alert: {
        padding: "5px"
    }
});
const Notification = ({ success, error, loading, event }) => {
    const classes = useStyles();
    return (
        <div className="notificationWrapper">
            {loading && <p>Sending data...</p>}
            {success &&
                <Alert data-testid="success-alert" className={classes.alert} severity="success">
                    A new event {event.id} on <strong>{event.date}</strong> was created successfully by <strong>{event.email}</strong>!
                </Alert>
            }
            {error && <Alert className={classes.alert} severity="error">{error}</Alert>}
        </div>
    )
}

Notification.propTypes = {
    success: PropTypes.bool,
    error: PropTypes.string,
    loading: PropTypes.bool,
    event: PropTypes.object
}

export default Notification
