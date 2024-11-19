// Recent Post Component

import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';

export default function RecentPost() {
  return (
    <Box pt={9} pb={9} bgcolor="secondary.light">
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          pb={2}
        >
          <Typography>Recent Post</Typography>
          <Typography variant="body2" color="#00A8CC">
            View all
          </Typography>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
          <Card sx={{ boxShadow: '0px 4px 10px rgba(187, 225, 250, 0.25)' }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '24px',
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Making a design system from scratch
              </Typography>
              <Typography variant="body2">
                12 Feb 2020 | Design, Pattern
              </Typography>
              <Typography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ boxShadow: '0px 4px 10px rgba(187, 225, 250, 0.25)' }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '24px',
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Creating pixel perfect icons in Figma
              </Typography>
              <Typography variant="body2">
                12 Feb 2020 | Figma, Icon Design
              </Typography>
              <Typography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
