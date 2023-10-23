'use client'
import styles from './page.module.css'
import Description from '@/components/descriptions'
import {useState} from 'react'


export default function Home() {

  const [showLess, setShowLess]= useState([true, true, true])
 
  
  const toggleDescription = (index) =>{
    const newShowLess=[...showLess];
    newShowLess[index] = !newShowLess[index]
    setShowLess(newShowLess)
  }

  return (
    <main className={styles.main}>
      {Array(3).fill(0).map((_, index) => (
          <div className={styles.container} key={index}>
            <div className={styles['left-container']}>
              <p className={styles.title}>Diary of a wimpy kid</p>
              <img className={styles['image-1']} src="https://wimpykid.com/wp-content/uploads/2021/10/1.png"/>
            </div>
            <div className={styles['right-container']}>
            <h4 className={styles.description}>
              {showLess[index]
                ? "It's a new school year, and Greg Heffley finds himself thrust into middle school, where undersized weaklings share the hallways with kids who are taller, meaner, and already shaving. The hazards of growing up before you're ready are uniquely revealed through words and drawings as Greg records them in his diary."
                : "It's a new school year, and Greg Heffley finds himself thrust into middle school..."
              }
            </h4>
            <button className={styles.button} onClick={() => toggleDescription(index)}>
              {showLess[index] ? "See Less" : "See More"}
            </button>
            </div>
            
          </div>
        ))}
    </main>
  )
}
