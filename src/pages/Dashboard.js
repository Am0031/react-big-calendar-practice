import Stack from "@mui/material/Stack";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Banner } from "../components/Banner";
import { MyCalendar } from "../components/Calendar";
import { DASHBOARD_QUERY } from "../queries/dashboard";
import { useEffect } from "react";

export const Dashboard = () => {
  //   const [selectDay, { loading, error, data }] = useLazyQuery(SEARCH_QUERY);
  // context hook to get the date clicked on
  const [getDashboard, { data, loading, error }] =
    useLazyQuery(DASHBOARD_QUERY);

  const userId = "62f76f2cb4d77124d46d166d";
  useEffect(() => {
    async function fetchData() {
      // You can await here
      await getDashboard({
        variables: {
          userId: userId,
        },
      });
    }
    fetchData();
  }, [getDashboard]);

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
          title="My Diary"
          subTitle="See all your scheduled activities at a glance!"
        />
      </Box>

      <Box>
        <MyCalendar
          title="Calendar"
          data={data?.carerDashboard?.appointments || []}
        />
      </Box>

      <Box>
        <h1>Other buttons and accesses</h1>
        <Button>Another Button</Button>
      </Box>
    </Stack>
  );
};
