// Featured Works Component

import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function FeaturedWorks() {
  return (
    <Box pt={4}>
      <Container>
        <Typography variant="h6" fontWeight={400} pb={2} color="#21243D">
          Featured Works
        </Typography>

        <Stack direction="column" spacing={4}>
          <Stack direction="row" gap={4} alignItems="center">
            <Image src="/imgFeature.jpg" alt="img1" width={255} height={180} />
            <Stack gap={2}>
              <Typography variant="h6" fontWeight={700}>
                Designing Dashboards
              </Typography>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography
                  variant="body2"
                  bgcolor="#142850"
                  color="white"
                  padding={0.5}
                  borderRadius={3}
                >
                  2020
                </Typography>
                <Typography variant="body2" color="#8695A4">
                  Dashboard
                </Typography>
              </Stack>
              <Typography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={4} alignItems="center">
            <Image src="/imgFeature.jpg" alt="img1" width={255} height={180} />
            <Stack gap={2}>
              <Typography variant="h6" fontWeight={700}>
                Designing Dashboards
              </Typography>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography
                  variant="body2"
                  bgcolor="#142850"
                  color="white"
                  padding={0.5}
                  borderRadius={3}
                >
                  2020
                </Typography>
                <Typography variant="body2" color="#8695A4">
                  Dashboard
                </Typography>
              </Stack>
              <Typography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={4} alignItems="center">
            <Image src="/imgFeature.jpg" alt="img1" width={255} height={180} />
            <Stack gap={2}>
              <Typography variant="h6" fontWeight={700}>
                Designing Dashboards
              </Typography>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography
                  variant="body2"
                  bgcolor="#142850"
                  color="white"
                  padding={0.5}
                  borderRadius={3}
                >
                  2020
                </Typography>
                <Typography variant="body2" color="#8695A4">
                  Dashboard
                </Typography>
              </Stack>
              <Typography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
