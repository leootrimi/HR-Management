import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  EditRecurrenceMenu,
} from '@devexpress/dx-react-scheduler-material-ui';

// Set the current date to the start of the week you want to display
const currentDate = '2024-07-01'; // Example: Set to the start of the week

const initialData = [
  { startDate: '2024-07-01T09:00', endDate: '2024-07-01T10:00', title: 'Meeting with team' },
  { startDate: '2024-07-02T12:00', endDate: '2024-07-02T13:00', title: 'Lunch with client' },
  { startDate: '2024-07-03T14:00', endDate: '2024-07-03T15:30', title: 'Project deadline' },
  { startDate: '2024-07-04T09:00', endDate: '2024-07-04T10:00', title: 'Weekly standup' },
  { startDate: '2024-07-05T13:00', endDate: '2024-07-05T14:30', title: 'Marketing strategy meeting' },
  { startDate: '2024-07-06T11:00', endDate: '2024-07-06T12:00', title: 'Team building activity' },
  { startDate: '2024-07-07T09:00', endDate: '2024-07-07T10:00', title: 'Quarterly review' },
  // Add more events as needed
];

const Schedule = () => {
  const [data, setData] = React.useState(initialData);

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      setData([...data, { id: data.length + 1, ...added }]);
    }
    if (changed) {
      setData(data.map(appointment => (changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
    }
    if (deleted !== undefined) {
      setData(data.filter(appointment => appointment.id !== deleted));
    }
  };

  return (
    <Paper>
      <Scheduler
        data={data}
      >
        <ViewState
          currentDate={currentDate}
        />
        <EditingState
          onCommitChanges={commitChanges}
        />
        <IntegratedEditing />
        <WeekView
          startDayHour={9}
          endDayHour={17}
        />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};

export default Schedule;
