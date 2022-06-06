import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Payment() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="PAY NOW">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="delete" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}