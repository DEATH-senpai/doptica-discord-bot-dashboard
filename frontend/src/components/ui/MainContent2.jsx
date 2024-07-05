import { Box, Typography } from '@mui/material';

function MainContent() {
  return (
    <div className="flex-1 bg-gray-main p-8 text-white">
   
      <div className="mt-8 space-y-4">
        <Box className="h-16 bg-red-700 rounded-md" />
        <Box className="h-16 bg-red-700 rounded-md" />
        <Box className="h-16 bg-red-700 rounded-md" />
        <Box className="h-16 bg-red-700 rounded-md" />
        <Box className="h-16 bg-red-700 rounded-md" />
      </div>
    
    </div>
  );
}

export default MainContent;
