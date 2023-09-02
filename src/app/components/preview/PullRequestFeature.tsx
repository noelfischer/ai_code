import React, { useState } from 'react';
import { Tabs, Tab, Paper, Container } from '@mui/material';
import styles from './page.module.css'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { ConversationTabContent } from './Conversation';
import { FilesChangedTabContent } from './FilesChanged';

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
                <>Conversation <span className={styles.badge}>2</span></>
              } className={styles.tab}></Tab>
              <Tab icon={<DifferenceOutlinedIcon className={styles.svg} />} iconPosition="start" label={
                <>Files changed <span className={styles.badge}>1</span></>
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