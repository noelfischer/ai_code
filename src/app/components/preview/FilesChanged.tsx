import React, { useState } from 'react';
import { Typography, Box, TextField, ListItemButton, ListItemText, ListItemIcon, Collapse, List, FormControlLabel, Checkbox, Stack, IconButton } from '@mui/material';
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandOutlinedIcon from '@mui/icons-material/ExpandOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const FilesChangedTabContent = () => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Stack direction="row" spacing={2} sx={{ paddingBlock: 1 }}>
            <Box sx={{ maxWidth: 270, display: { xs: 'none', md: 'block' } }}>
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
            <Box sx={{ width: "100%" }}>
                <Stack direction="row" alignItems="center" className={styles.fileHeader}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton><ExpandMore fontSize='small' className={styles.darkGrey} /></IconButton>
                        <IconButton><ExpandOutlinedIcon fontSize='small' className={styles.darkGrey} /></IconButton>
                        <Typography className={styles.darkGrey} sx={{ fontSize: 12 }}><pre>40</pre></Typography>
                        <Stack direction="row" spacing={"1px"} alignItems="center">
                            <Box className={styles.green} />
                            <Box className={styles.green} />
                            <Box className={styles.green} />
                            <Box className={styles.green} />
                            <Box className={styles.neutral} />
                        </Stack>
                        <Typography sx={{ fontSize: 15 }}><pre>src/image_compression.py</pre></Typography>
                        <IconButton><ContentCopyRoundedIcon fontSize='small' className={styles.darkGrey} /></IconButton>
                    </Stack>
                    <Stack direction="row" spacing={0} alignItems="center" sx={{ width: "100%" }} justifyContent="flex-end">
                        <FormControlLabel className={styles.checkbox} control={<Checkbox size="small" />} label="Viewed" />
                        <IconButton><ChatBubbleOutlineOutlinedIcon fontSize='small' className={styles.darkGrey} /></IconButton>
                        <IconButton><MoreVertIcon fontSize='small' className={styles.darkGrey} /></IconButton>
                    </Stack>
                </Stack>
            </Box>
        </Stack>)
}
