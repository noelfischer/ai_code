import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import styles from './page.module.css'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';


const theme = createTheme();

const ConversationTabContent = () => (
  <Box p={3}>
    <Typography variant="h6">Conversation</Typography>
    <Typography variant="body1">
      Here are some test messages in the conversation tab.
    </Typography>
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

  return (
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
  );
};

export default PullRequestFeature;