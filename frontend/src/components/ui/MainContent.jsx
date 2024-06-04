import { Box, Typography } from '@mui/material';

function MainContent() {
  return (
    <div className="flex-1 bg-gray-main p-8 text-white">
      <div className="mt-8 space-y-4">
        <Box className="h-16 bg-gray-700 rounded-md" />
        <Box className="h-16 bg-gray-700 rounded-md" />
        <Box className="h-16 bg-gray-700 rounded-md" />
        <Box className="h-16 bg-gray-700 rounded-md" />
        <Box className="h-16 bg-gray-700 rounded-md" />
      </div>
      <style>
      {`
        .bg-gray-main {
          background-color: #000c38;
        }
        .bg-gray-700 {
          background-color: #1e1e1e;
        }
        .p-8 {
          height: 40rem;
        }
      `}
    </style>
    </div>
  );
}

export default MainContent;
