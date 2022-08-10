import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Banner } from "../components/Banner";
import { MyCalendar } from "../components/Calendar";

export const Dashboard = () => {
  //   const [selectDay, { loading, error, data }] = useLazyQuery(SEARCH_QUERY);
  // context hook to get the date clicked on

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
        <Banner title="Social Network App" subTitle="Why not join in!" />
      </Box>

      <Box>
        <MyCalendar title="My big calendar" />
      </Box>

      <Box>
        {/* {loading && <h2>Loading...</h2>}
        {error && <h2>Error</h2>}
        {data && <DayTimeline title="Date of selected day" data={data} />} */}
      </Box>
    </Stack>
  );
};
