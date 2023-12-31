import React, { useState } from 'react';
import { Typography, Box, IconButton, Skeleton, Avatar } from '@mui/material';
import styles from './page.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TypeAnimation } from 'react-type-animation';

export const ConversationTabContent = () => (
    <Box className={styles.commentContainer}>
        <Avatar sx={{ bgcolor: "#b3b3cc" }}>A</Avatar>
        <Box>
            <Box className={styles.commentContent}>
                <Box className={styles.commentHeader}>
                    <Typography variant="body2" className={styles.commentUsername}>
                        <AutoAwesomeIcon fontSize='small' sx={{ height: 12, transform: "scale(1.5)" }} /> AIExpert
                    </Typography>
                    <Typography variant="body2" className={styles.commentTimestamp}>
                        <CountUp />
                    </Typography>
                    <IconButton aria-label='More' className={styles.commentOptions}>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Typography variant="body1" className={styles.commentText}>
                    <SkeletonContent />
                </Typography>
                <Box className={styles.commentFooter}>
                    <IconButton aria-label='Add Reaction'>
                        <AddReactionOutlinedIcon fontSize='small' />
                    </IconButton>
                </Box>
            </Box>
            <SecondComment />
        </Box>
    </Box>
);

const SkeletonContent = () => {
    const ref1 = React.createRef<HTMLSpanElement>();
    const ref2 = React.createRef<HTMLSpanElement>();
    const ref3 = React.createRef<HTMLSpanElement>();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const el1 = ref1.current;
    const el2 = ref2.current;
    const el3 = ref3.current;
    const showCursorAnimation = (show: boolean) => {
        if (!ref1.current || !ref2.current || !ref3.current) {
            return;
        }

        const el1 = ref1.current;
        const el2 = ref2.current;
        const el3 = ref3.current;
        if (show) {
            el1.classList.add(CURSOR_CLASS_NAME);
            el2.classList.add(CURSOR_CLASS_NAME);
            el3.classList.add(CURSOR_CLASS_NAME);
        } else {
            el1.classList.remove(CURSOR_CLASS_NAME);
            el2.classList.remove(CURSOR_CLASS_NAME);
            el3.classList.remove(CURSOR_CLASS_NAME);
        }
    };
    const [loaded, setLoaded] = useState(false);
    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 1800);
    }, [loaded]);
    return (
        loaded ? <>
            <TypeAnimation ref={ref1} cursor={false} className={CURSOR_CLASS_NAME} wrapper="div" speed={99} style={{ whiteSpace: 'pre-line' }} sequence={["", 810,
                'I\'ve taken a close look at your recent commit regarding the image compression algorithm. Your work is truly commendable—your approach to enhancing the compression technique is both innovative and efficient.'
            ]} />
            <TypeAnimation ref={ref2} cursor={false} className={CURSOR_CLASS_NAME} wrapper="div" speed={99} style={{ whiteSpace: 'pre-line' }} sequence={["", 1500,
                '\nHowever, as I went through the code, I noticed a subtle concern that deserves attention. In the "handleColorPalettes" function, there seems to be an instance where the variable "colorIndex" isn\'t being reset after each loop iteration. This could potentially lead to unintended color mismatches, especially when processing multiple images sequentially.'
                , 600, () => showCursorAnimation(false)]} />
            <TypeAnimation ref={ref3} cursor={false} className={CURSOR_CLASS_NAME} wrapper="div" speed={85} style={{ whiteSpace: 'pre-line' }} sequence={["", 1800,
                '\nTo ensure the algorithm\'s reliability, I recommend including a reset for "colorIndex" within the loop, just before it iterates over the next image. This small adjustment could greatly contribute to the accuracy of the compression process.'
            ]} /></> : <>
            <Skeleton animation="wave" width={"60vw"} sx={{ maxWidth: 1000 }} /><Skeleton animation="wave" width={"60vw"} sx={{ maxWidth: 1000 }} /><Skeleton animation="wave" width={"45vw"} sx={{ maxWidth: 800 }} />
        </>
    );
}

const SecondComment = () => {
    const [loaded, setLoaded] = useState(0);
    React.useEffect(() => {
        setTimeout(() => setLoaded(1), 10000);
        setTimeout(() => setLoaded(2), 12000);
    }, []);

    return (
        loaded > 0 ?
            <Box sx={{ borderLeft: "1px solid #343941", marginLeft: "26px", paddingBlock: 2, maxWidth: 750 }}>
                <Box className={styles.commentContent} sx={{ marginLeft: 3 }}>
                    <Box className={styles.commentHeader}>
                        <Typography variant="body2" className={styles.commentUsername} sx={{ padding: 1 }}>
                            <pre>src/image_compression.py</pre>
                        </Typography>
                    </Box>
                    <table className={styles.table}>
                        <tr>
                            <td><pre>          191 </pre></td>
                            <td><pre> +     <span className={styles.red}>for</span> image <span className={styles.blue}>in</span> images:</pre></td>
                        </tr>
                        <tr>
                            <td><pre>          192 </pre></td>
                            <td><pre> +         <span className={styles.purple}>handleColorPalettes</span>(image)</pre></td>
                        </tr>
                        <tr>
                            <td><pre>          193 </pre></td>
                            <td><pre> +         <span className={styles.purple}>applyCompression</span>(image)</pre></td>
                        </tr>
                        <tr>
                            <td><pre>          194 </pre></td>
                            <td><pre> +         <span className={styles.purple}>saveCompressedImage</span>(image)</pre></td>
                        </tr>
                    </table>
                    <Box className={styles.commentContainer} sx={{ paddingBottom: 0.5, paddingTop: 0.5, paddingRight: 0.5, alignItems: "center" }}>
                        <Typography variant="body2" className={styles.commentUsername}>
                            <AutoAwesomeIcon fontSize='small' sx={{ height: 12, transform: "scale(1.5)" }} /> AIExpert
                        </Typography>
                        <Typography variant="body2" className={styles.commentTimestamp}>
                            <CountUp />
                        </Typography>
                        <IconButton aria-label='More' className={styles.commentOptions} >
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2" className={styles.commentText} sx={{ paddingTop: 0, marginInline: "2px" }}>
                        {loaded > 1 ? "Reset colorIndex within the loop to ensure accurate compression across multiple images." : <Skeleton />}
                    </Typography>
                    <Box className={styles.commentFooter}>
                        <IconButton aria-label='Add Reaction'>
                            <AddReactionOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </Box>
            </Box> : <></>
    )
}

export const CountUp = () => {
    const [counter, setCounter] = React.useState(-8);
    React.useEffect(() => {
        setTimeout(() => setCounter(counter + 3), 3000);
    }, [counter]);
    return (
        counter > 0 ? <>commented {counter} seconds ago</> : <></>
    );
}