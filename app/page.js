
import styles from './page.module.css'
import Description from '@/components/descriptions'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['left-container']}>
          <p className={styles.title}>Diary of a wimpy kid</p>
          <img className={styles['image-1']} src="https://wimpykid.com/wp-content/uploads/2021/10/1.png" />
        </div>
        <Description />
      </div>

      <div className={styles.container}>
        <div className={styles['left-container']}>
          <p className={styles.title}>Diary of a wimpy kid</p>
          <img className={styles['image-1']} src="https://wimpykid.com/wp-content/uploads/2021/10/1.png" />
        </div>
        <Description />
      </div>

      <div className={styles.container}>
        <div className={styles['left-container']}>
          <p className={styles.title}>Diary of a wimpy kid</p>
          <img className={styles['image-1']} src="https://wimpykid.com/wp-content/uploads/2021/10/1.png" />
        </div>
        <Description />
      </div>
  
    </main>
  )
}
