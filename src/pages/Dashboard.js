import Stack from "@mui/material/Stack";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Banner } from "../components/Banner";
import { MyCalendar } from "../components/Calendar";
import { DASHBOARD_QUERY } from "../queries/dashboard";

export const Dashboard = () => {
  //   const [selectDay, { loading, error, data }] = useLazyQuery(SEARCH_QUERY);
  // context hook to get the date clicked on
  const [getDashboard, { data, loading, error }] =
    useLazyQuery(DASHBOARD_QUERY);

  const renderCalendar = (event) => {
    event.preventDefault();

    console.log("button clicked");
    getDashboard({
      variables: {
        userId: "62f76f2cb4d77124d46d166d",
      },
    });
  };

  let calendarData;
  !data
    ? (calendarData = [])
    : (calendarData = data.carerDashboard.appointments);

  console.log(calendarData);

  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={8}
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Banner
          title="WeCare App"
          subTitle="We help you with your care management"
        />
      </Box>

      <Box>
        <Button variant="contained" key="calendar-btn" onClick={renderCalendar}>
          Load my Calendar
        </Button>
        <MyCalendar title="My big calendar" data={calendarData} />
      </Box>

      <Box>
        <h1>Other buttons and accesses</h1>
      </Box>
    </Stack>
  );
};
