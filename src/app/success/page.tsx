'use client'
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styles from './page.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Page() {
  return (
    <Box className={styles.div}>
      <Box className={styles.box}>
        <Typography variant="h3" className={styles.h3}>Thank You for <span className={styles.span}> Joining AIExpert!</span> 🚀</Typography>
        <Typography variant="h4" className={styles.h4}>
          Welcome to the AIEX Community!
        </Typography>
        <Typography className={styles.p}>
          We&apos;re thrilled that you&apos;ve joined our AI-powered code review journey.
          Your interest in making code reviews smarter is a big step towards more efficient and effective development.
        </Typography>
        <Typography variant="h4" className={styles.h4}>
          What&apos;s Next?
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={styles.p}>
              <Typography variant="h5" className={styles.h5}>🌟 <span className={styles.span}>Exclusive Access</span></Typography> As a valued member, you&apos;ll enjoy exclusive access to AI-generated code reviews and insightful articles
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={styles.p}>
              <Typography variant="h5" className={styles.h5}>🙌 <span className={styles.span}> Join Our Community</span></Typography> Connect with like-minded developers and tech enthusiasts on our Community Platform
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={styles.p}>
              <Typography variant="h5" className={styles.h5}>💬 <span className={styles.span}>Feedback Matters</span></Typography> We value your feedback. In the coming weeks, we&apos;ll reach out to gather your thoughts and insights to improve AI Expert.
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h4" className={styles.h4}>
          Stay in the Loop:
        </Typography>
        <Typography className={styles.p}>
          Follow us on social media to stay updated on the latest AIEX news, tips, and success stories:
        </Typography>
        <Button variant="outlined" color="primary" className={styles.social} startIcon={<TwitterIcon />}>Twitter</Button>
        <Button variant="outlined" color="primary" className={styles.social} startIcon={<FacebookIcon />}>Facebook</Button>
        <Button variant="outlined" color="primary" className={styles.social} startIcon={<InstagramIcon />}>Instagram</Button>
        <Box className={styles.regards}>
          <Typography className={styles.p}>
            Thank you for being an early supporter of AIEX. We can&apos;t wait to embark on this exciting journey with you!<br /><br />
          </Typography>
          <Typography className={styles.p}>
            Warm regards, <br />
            The AIEX Team
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;