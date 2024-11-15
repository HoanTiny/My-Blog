/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container } from '@mui/material';
import * as React from 'react';

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  return (
    <Box
      display={{
        xs: 'block',
        lg: 'none',
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: 'red',
        }}
      ></Container>
    </Box>
  );
}
