import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

function HeroSection() {
  return (
    <Box pt={18} pb={9}>
      <Container>
        {/* Mobile thì đảo ảnh lên trước */}
        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4}>
          <Box className="flex flex-col gap-8">
            <Typography
              component="h1"
              variant="h3"
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Hi, I am John, Creative Technologist
            </Typography>
            <Typography>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" className="w-fit text-white p-4">
              Download Resume
            </Button>
          </Box>

          <Image
            src="/Avt.svg"
            alt="Avt"
            width={500}
            height={500}
            layout="responsive"
            priority
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;
