import styles from "./PokeAbout.module.scss";

function PokeAbout() {
  return (
    <>
      <div className={styles.containerAbout}>
        <div className={styles.header}>
          <h1>Pokemon</h1>
          <h2>tipo de pokemon</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.paragraphs}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              qui quo autem eos ratione? Ab id eveniet perspiciatis nesciunt
              quaerat animi aut, natus ratione sed sapiente nulla, explicabo
              voluptatibus maiores?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              maxime dolore quod adipisci hic unde eos temporibus beatae? Rerum
              exercitationem eligendi incidunt autem aliquam nulla illum aliquid
              beatae quidem dolore?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              quisquam incidunt vel quaerat corrupti sint cupiditate nemo
              pariatur, tempora nostrum quod numquam ad esse consequuntur
              inventore nobis. Et, quae quod!
            </p>
          </div>
          <div className={styles.btnCollection}>
            <button>button1</button>
            <button>button2</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeAbout;
