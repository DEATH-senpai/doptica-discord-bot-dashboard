import { useState } from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse, ListItemButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SunIcon from '@mui/icons-material/WbSunny';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import ScoreIcon from '@mui/icons-material/Score';
import PointsIcon from '@mui/icons-material/PointOfSale';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [openGeneral, setOpenGeneral] = useState(true);
  const [openStore, setOpenStore] = useState(true);
  const [openXBScore, setOpenXBScore] = useState(true);
  const navigate = useNavigate();
  const handleGeneralClick = () => {
    setOpenGeneral(!openGeneral);
  };

  const handleStoreClick = () => {
    setOpenStore(!openStore);
  };

  const handleXBScoreClick = () => {
    setOpenXBScore(!openXBScore);
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center">
        <Avatar className="w-24 h-24 mb-4" />
        <h2 className="icon-style">Rani Ismail</h2>
      </div>
      <List className="mt-4" >
        <Divider className="bg-gray-500" />
        <ListItemButton button onClick={handleGeneralClick}>
          <ListItemText className="text-font" primary="General" />
          {openGeneral ? <ExpandLess className="icon-style" /> : <ExpandMore className="icon-style" />}
        </ListItemButton>
        <Collapse in={openGeneral} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigate('/dashboard/profile')} >
              <ListItemIcon >
                <VisibilityIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="Rani Ismail" className="list-item-text" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider className="bg-gray-700" />
        <ListItemButton onClick={handleStoreClick}>
          <ListItemText className="text-m text-font" primary="Store" />
          {openStore ? <ExpandLess className="icon-style" /> : <ExpandMore className="icon-style" />}
        </ListItemButton>
        <Collapse in={openStore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigate('/dashboard')}>
              <ListItemIcon>
                <WallpaperIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="Profile Background" className="list-item-text" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SunIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="Profile Icons" className="list-item-text" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="Identity Background" className="list-item-text" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider className="bg-gray-700" />
        <ListItemButton onClick={handleXBScoreClick}>
          <ListItemText className="icon-style" primary="XB Score" />
          {openXBScore ? <ExpandLess className="icon-style" /> : <ExpandMore className="icon-style" />}
        </ListItemButton>
        <Collapse in={openXBScore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ScoreIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="XB Score" className="list-item-text" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PointsIcon className="icon-style" />
              </ListItemIcon>
              <ListItemText primary="XB Points" className="list-item-text" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider className="bg-gray-700" />
        <ListItem button>
          <ListItemIcon >
            <ExitToAppIcon className="text-red-500" />
          </ListItemIcon>
          <ListItemText primary="Log out" className="text-red-500 list-item-text" />
        </ListItem>
      </List>
      <style>
        {`
        .w-64 {
          width: 16rem;
          height: 40rem;
        }
        .bg-gray-800 {
          background-color: #1e1e1e;
        }
        .text-font {
          color:#696969;
          margin: 0;
          font-family: Roboto, sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 1.5;
          display: block;
          
        }
        .list-item-text {
          
          font-size: 0.75rem;
          color: white;
        }
        .list-item {
          
          font-size: 0.75rem;
        
        }
       
        .icon-style {
          color:#696969;
          
          font-size: 1.25rem;
          
        }
      

        `}
      </style>
    </div>
  );
}

export default Sidebar;
