/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ROUTER_LINK } from '@/utils';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box display={{ xs: 'none', lg: 'block' }}>
      <Container>
        <Stack className="flex justify-end flex-row gap-4 ">
          {ROUTER_LINK.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="no-underline text-black hover:text-[#FF7999]"
            >
              {item.name}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
