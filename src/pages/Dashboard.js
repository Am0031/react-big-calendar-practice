import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Banner } from "../components/Banner";
import { StyledCalendar } from "../components/Calendar/StyledCalendar";
import { DASHBOARD_QUERY } from "../queries/dashboard";
import { useEffect } from "react";
import { OtherCalendar } from "../components/Calendar/OtherCalendar";
import { BasicCalendar } from "../components/Calendar/BasicCalendar";
import { ButtonGroup } from "@mui/material";

export const Dashboard = () => {
  const [selectedView, setSelectedView] = useState(1);
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
      spacing={2}
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

        <Box
          display="flex"
          direction="row"
          justifyContent="center"
          sx={{
            color: "white",
          }}
          className="selection-view"
        >
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            color="secondary"
          >
            <Button onClick={() => setSelectedView(1)}>Basic Calendar</Button>
            <Button onClick={() => setSelectedView(2)}>Styled Calendar</Button>
            <Button onClick={() => setSelectedView(3)}>Other Calendar</Button>
          </ButtonGroup>
        </Box>
      </Box>

      {selectedView === 1 && (
        <Box>
          <BasicCalendar
            title="My Basic Calendar"
            data={data?.carerDashboard?.appointments || []}
          />
        </Box>
      )}
      {selectedView === 2 && (
        <Box>
          <StyledCalendar
            title="My Styled Calendar"
            data={data?.carerDashboard?.appointments || []}
          />
        </Box>
      )}
      {selectedView === 3 && (
        <Box>
          <OtherCalendar
            title="My Other Calendar"
            data={data?.carerDashboard?.appointments || []}
          />
        </Box>
      )}

      <Box>
        <h1>Other buttons and accesses</h1>
        <Button>Another Button</Button>
      </Box>
    </Stack>
  );
};
