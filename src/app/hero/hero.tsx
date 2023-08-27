import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './page.module.css'

export default function Hero() {
    return (
        <div className={styles.div}>
            <h1 className={styles.title + " palette.text.primary"}>Get reviews <span className={styles.span}>instantly</span><br />with Codexpert</h1>
            <p className={styles.p}>Open a pull request and get valuable insights on bugs and problems<br /> with suggested code solutions in seconds.</p>
            <div className={styles.btncontainer}>
                <Button className={styles.button1} variant="contained" color='primary' endIcon={
                    <div className={styles.container}>
                        <ArrowForwardIosIcon className={styles.icon} />
                        <ArrowForwardIosIcon className={styles.icon} />
                        <ArrowForwardIosIcon className={styles.icon} />
                    </div>}>
                    Get started
                </Button>
                <Button className={styles.button2} variant='outlined' color='primary' endIcon={
                    <div className={styles.container}>
                        <ArrowForwardIosIcon className={styles.icon} />
                        <ArrowForwardIosIcon className={styles.icon} />
                    </div>}>
                    Learn more
                </Button>
            </div>
        </div>
    )
}