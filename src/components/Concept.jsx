import styles from 'src/components/Concept.module.css'

const Concept  = (props) =>{
  return (
      <div className= {styles.concept} >
        <div className= {styles.concept_image} >
          <img src='/img/concept.jpg' alt ="コンセプト" width="640px" height=  "480px"></img>
        </div>
        <div className= {styles.concept_body} >
          <span className= {styles.concept_title}>Concept</span>
          <p className={styles.concept_text}>「髪をとおしてサプライズを」</p>
          <p className={styles.concept_text}>私たちは髪を通じて驚きと幸せを提供します。</p>
          <p className={styles.concept_text}>洗礼された技術と寄り添う心を提供することで</p>
          <p className={styles.concept_text}>全てのお客様が幸せになる世界を作ります。</p>
        </div>
      </div>
  );
}

export { Concept };