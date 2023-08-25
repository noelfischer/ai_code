import styles from './page.module.css'

export default function Hero() {
    return (
        <div className={styles.div}>
            <h1 className={styles.title + " palette.text.primary"}>Get reviews <span className={styles.span}>instantly</span><br />with Codexpert</h1>
        </div>
    )
}