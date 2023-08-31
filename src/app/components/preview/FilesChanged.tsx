import React, { useState } from 'react';
import { Typography, Box, Input, InputAdornment, TextField, Button, ListItemButton, ListItemText, ListItemIcon, Collapse, List } from '@mui/material';
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore, StarBorder } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export const FilesChangedTabContent = () => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box className={styles.filesChangedContainer}>
            <Box sx={{ maxWidth: 270 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon fontSize='small' sx={{ color: 'action.active', ml: 2, mr: 1, my: 0.5 }} />
                    <TextField fullWidth size="small" variant="standard" label="Filter changed files" className={styles.fileSearch} />
                </Box>
                <Box className={styles.file}>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon><>{open ? <ExpandMore fontSize='small' className={styles.expandIcon} /> : <ChevronRightIcon fontSize='small' className={styles.expandIcon} />}<FolderOpenOutlinedIcon fontSize='small' /></></ListItemIcon>
                        <ListItemText className={styles.dirText}>src</ListItemText>
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: 3, pl: 4, borderLeft: "1px solid #343941" }}>
                                <ListItemIcon sx={{ minWidth: 28 }}>
                                    <InsertDriveFileOutlinedIcon className={styles.fileIcon} fontSize='small' />
                                </ListItemIcon>
                                <ListItemText className={styles.dirText}>image_compression.py</ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Box>
            </Box>
            <Box className={styles.file}>
            </Box>
        </Box>)
}
