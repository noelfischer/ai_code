import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Container, Avatar, IconButton, Skeleton } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import styles from './page.module.css'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TypeAnimation } from 'react-type-animation';



const theme = createTheme();

const CountUp = () => {
  const [counter, setCounter] = React.useState(-11);
  React.useEffect(() => {
    setTimeout(() => setCounter(counter + 3), 3000);
  }, [counter]);
  return (
    counter > 0 ? <>commented {counter} seconds ago</> : <></>
  );
}

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
        , 3200, () => showCursorAnimation(false)]} />
      <TypeAnimation ref={ref3} cursor={false} className={CURSOR_CLASS_NAME} wrapper="div" speed={85} style={{ whiteSpace: 'pre-line' }} sequence={["", 1800,
        '\nTo ensure the algorithm\'s reliability, I recommend including a reset for "colorIndex" within the loop, just before it iterates over the next image. This small adjustment could greatly contribute to the accuracy of the compression process.'
      ]} /></> : <>
      <Skeleton animation="wave" width={1000} /><Skeleton animation="wave" width={1000} /><Skeleton animation="wave" width={800} />
    </>
  );
}

const ConversationTabContent = () => (
  <Box className={styles.commentContainer}>
    <Avatar alt="AIExpert" src="user-avatar.jpg" />
    <Box className={styles.commentContent}>
      <Box className={styles.commentHeader}>
        <Typography variant="body2" className={styles.commentUsername}>
          <AutoAwesomeIcon fontSize='small' sx={{ height: 12, transform: "scale(1.5)" }} /> AIExpert
        </Typography>
        <Typography variant="body2" className={styles.commentTimestamp}>
          <CountUp />
        </Typography>
        <IconButton className={styles.commentOptions}>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" className={styles.commentText}>
        <SkeletonContent />
      </Typography>
      <Box className={styles.commentFooter}>
        <IconButton className={styles.commentReaction}>
          <AddReactionOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

const FilesChangedTabContent = () => (
  <Box p={3}>
    <Typography variant="h6">Files changed</Typography>
    <Typography variant="body1">
      Here is some test code in the files changed tab.
    </Typography>
    <pre>
      <code>{`function greet() {
  console.log("Hello, world!");
}`}</code>
    </pre>
  </Box>
);

const PullRequestFeature = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0)  scale(1, 1);
  }
`;

  return (
    <>
      <div className={styles.glow}></div>
      <Reveal fraction={0.5} duration={400} keyframes={customAnimation} triggerOnce>
        <Container>
          <Paper elevation={0} className={styles.container} square>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: {
                  top: 9,
                  bottom: "unset",
                }
              }
              }
            >
              <Tab icon={<QuestionAnswerOutlinedIcon className={styles.svg} />} iconPosition="start" label={
                <>Conversation <span className={styles.badge}>5</span></>
              } className={styles.tab}></Tab>
              <Tab icon={<DifferenceOutlinedIcon className={styles.svg} />} iconPosition="start" label={
                <>Files changed <span className={styles.badge}>2</span></>
              } className={styles.tab} />
            </Tabs>
          </Paper>
          <Paper elevation={0} className={styles.content} square>
            {selectedTab === 0 && <ConversationTabContent />}
            {selectedTab === 1 && <FilesChangedTabContent />}
          </Paper>
        </Container>
      </Reveal>
    </>
  );
};

export default PullRequestFeature;