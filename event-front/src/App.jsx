import EventForm from "./components/EventForm";
import Notification from "./components/Notification";

import { addEvent } from "./store/events";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.events.loading);
  const error = useSelector(state => state.events.error);
  const success = useSelector(state => state.events.success);
  const event = useSelector(state => state.events.event);
  return (
    <div className="App">
      <h1>Event registration</h1>
      <EventForm handleAddEvent={(body) => dispatch(addEvent(body))} />
      <Notification success={success} error={error} loading={loading} event={event} />
    </div>
  )
}

export default App

