import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Hero() {
    const router = useRouter();
    const ref = useRef<null | HTMLDivElement>(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.div}>
            <h1 className={styles.title + " palette.text.primary"}>Get reviews <span className={styles.span}>instantly</span><br />with AI Expert</h1>
            <p className={styles.p}>Open a pull request and get valuable insights on bugs and problems<br /> with suggested code solutions in seconds.</p>
            <div className={styles.btncontainer} ref={ref}>
                <a href='/signup'>
                    <Button className={styles.button1} variant="contained" color='primary' endIcon={
                        <div className={styles.container}>
                            <ArrowForwardIosIcon className={styles.icon} />
                            <ArrowForwardIosIcon className={styles.icon} />
                            <ArrowForwardIosIcon className={styles.icon} />
                        </div>}
                        aria-label="Get started">
                        Get started
                    </Button>
                </a>
                <Button onClick={handleClick} className={styles.button2} variant='outlined' color='primary' endIcon={
                    <div className={styles.container}>
                        <ArrowForwardIosIcon className={styles.icon} />
                        <ArrowForwardIosIcon className={styles.icon} />
                    </div>}
                    aria-label="Learn more">
                    Learn more
                </Button>
            </div>
        </div>
    )
}