import { Card, CardContent, CircularProgress, SvgIcon } from "@mui/joy";
import Typography from "@mui/joy/Typography";

export default function CardDashboard() {
  return (
    <Card variant="outlined" invertedColors>
      <CardContent orientation="horizontal">
        <CircularProgress size="lg" determinate value={20}>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </SvgIcon>
        </CircularProgress>
        <CardContent>
          <Typography level="body-md">Gross profit</Typography>
          <Typography level="h2">$ 432.6M</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}
