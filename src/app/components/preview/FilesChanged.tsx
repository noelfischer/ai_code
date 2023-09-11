import React, { useState } from 'react';
import { Typography, Box, TextField, ListItemButton, ListItemText, ListItemIcon, Collapse, List, FormControlLabel, Checkbox, Stack, IconButton, Skeleton } from '@mui/material';
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
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { CountUp } from './Conversation';



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
                <CodeTable />
            </Box>
        </Stack>)
}


const CodeTable = () => {
    const [loaded, setLoaded] = useState(0);
    React.useEffect(() => {
        setTimeout(() => setLoaded(1), 2500);
        setTimeout(() => setLoaded(2), 4000);
    }, []);
    return (
        <table className={styles.fileContent} >
            <tr className={styles.blueBackground}>
                <td style={{ textAlign: "center" }}><pre>...</pre></td>
                <td style={{ textAlign: "center" }}><pre>...</pre></td>
                <td className={styles.noRight + " " + styles.darkGrey}><pre>   @@ -3,6 +3,9 @@</pre></td>
            </tr>
            <tr className={styles.greenBackground}>
                <td></td>
                <td><pre>1</pre></td>
                <td><pre>+ <span className={styles.red}>def</span> <span className={styles.purple}>process_text</span>(text):</pre></td>
            </tr>
            <tr className={styles.greenBackground}>
                <td></td>
                <td><pre>2</pre></td>
                <td><pre>+     result = text.<span className={styles.purple}>lower</span>()</pre></td>
            </tr>
            <tr className={styles.greenBackground}>
                <td></td>
                <td><pre>3</pre></td>
                <td><pre>+     <span className={styles.red}>return</span> result</pre></td>
            </tr>
            <tr>
                <td><pre>1</pre></td>
                <td><pre>4</pre></td>
                <td><pre> </pre></td>
            </tr>
            <tr>
                <td><pre>2</pre></td>
                <td><pre>5</pre></td>
                <td><pre>  <span className={styles.red}>def</span> <span className={styles.purple}>scramble</span>(text):</pre></td>
            </tr>
            <tr>
                <td><pre>3</pre></td>
                <td><pre>6</pre></td>
                <td><pre>      config = <span className={styles.purple}>load_config()</span>  <span className={styles.darkGrey}># Load configuration settings</span></pre></td>
            </tr>
            <tr className={styles.blueBackground}>
                <td className={styles.noPadding} style={{ textAlign: "center" }} colSpan={2}><IconButton><ExpandOutlinedIcon className={styles.darkGrey} /></IconButton></td>
                <td className={styles.noRight + " " + styles.darkGrey}><pre>   @@ -2,3 +5,8 @@ def process_and_clean_tex(text):</pre></td>
            </tr>
            <tr>
                <td><pre>20</pre></td>
                <td><pre>25</pre></td>
                <td><pre>      log = <span className={styles.purple}>initialize_logger</span>()  <span className={styles.darkGrey}># Initialize a logger</span></pre></td>
            </tr>
            <tr>
                <td><pre>21</pre></td>
                <td><pre>26</pre></td>
                <td><pre></pre></td>
            </tr>
            <tr>
                <td><pre>22</pre></td>
                <td><pre>27</pre></td>
                <td><pre>      <span className={styles.red}>for</span> line <span className={styles.blue}>in</span> input_lines:</pre></td>
            </tr>
            <tr className={styles.redBackground}>
                <td><pre>23</pre></td>
                <td></td>
                <td><pre>-         output_lines.<span className={styles.purple}>append</span>(line)</pre></td>
            </tr>
            <tr className={styles.greenBackground}>
                <td></td>
                <td><pre>28</pre></td>
                <td><pre>+         processed_line <span className={styles.blue}>=</span> <span className={styles.purple}>process_text</span>(line)</pre></td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <Box className={styles.noRight} sx={{ border: "1px solid #424852", borderRadius: 2, margin: 1 }}>
                        <Box className={styles.commentContainer} sx={{ paddingBottom: 0.5, paddingTop: 0.5, paddingRight: 0.5, alignItems: "center" }}>
                            <Typography variant="body2" className={styles.commentUsername}>
                                <AutoAwesomeIcon fontSize='small' sx={{ height: 12, transform: "scale(1.5)" }} /> AIExpert
                            </Typography>
                            <Typography variant="body2" className={styles.commentTimestamp}>
                                <CountUp />
                            </Typography>
                            <IconButton className={styles.commentOptions} >
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                        {loaded > 0 ? <>
                            <Typography variant="body2" className={styles.commentText} sx={{ paddingTop: 0, marginInline: "2px" }}>
                                In the loop that processes each input line, you&apos;re currently calling the `<b>process_text</b>` function without removing potential leading or trailing whitespace. This could inadvertently affect the output if there are any extra spaces.<br /><br />
                                To ensure consistent results, I suggest using the `<b>strip()</b>` function on the line before passing it to `<b>process_text</b>`. This will remove any extra whitespace before converting the text to lowercase, guaranteeing accurate and expected outcomes.
                            </Typography>
                            {loaded > 1 ? <Box sx={{ border: "1px solid #343941", borderRadius: 1, marginInline: 2, marginBlock: 1 }}>
                                <Typography className={styles.darkGrey} sx={{ fontSize: 13, margin: 1 }}>Suggested change</Typography>
                                <table className={styles.fileContent} style={{ width: "100%", borderInline: "none", borderBottom: "none" }} >
                                    <tr className={styles.redBackground}>
                                        <td></td>
                                        <td><pre>28</pre></td>
                                        <td><pre>-         processed_line <span className={styles.blue}>=</span> <span className={styles.purple}>process_text</span>(line)</pre></td>
                                    </tr>
                                    <tr className={styles.greenBackground}>
                                        <td></td>
                                        <td><pre>28</pre></td>
                                        <td><pre>+         processed_line <span className={styles.blue}>=</span> <span className={styles.purple}>process_text</span>(line<span className={styles.greenBack}>.<span className={styles.purple}>strip</span>()</span>)</pre></td>
                                    </tr>
                                </table>
                            </Box> : <Skeleton sx={{ margin: 2.5 }} />}
                            <Box className={styles.commentFooter}>
                                <IconButton>
                                    <AddReactionOutlinedIcon fontSize='small' />
                                </IconButton>
                            </Box>
                        </> : <Skeleton sx={{ margin: 2 }} />}
                    </Box>
                </td>
            </tr>
            <tr className={styles.greenBackground}>
                <td></td>
                <td><pre>29</pre></td>
                <td><pre>+         output_lines.<span className={styles.purple}>append</span>(processed_line)</pre></td>
            </tr>
            <tr>
                <td><pre>24</pre></td>
                <td><pre>30</pre></td>
                <td><pre> </pre></td>
            </tr>
        </table>
    )
}