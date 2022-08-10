import "./App.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Banner } from "./components/Banner";
import { MyCalendar } from "./components/Calendar";
import { DayTimeline } from "./components/Timeline";

export const App = () => {
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
        <DayTimeline title="Date of selected day" />
      </Box>
    </Stack>
  );
};
