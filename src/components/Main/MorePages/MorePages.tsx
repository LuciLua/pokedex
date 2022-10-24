import styles from './MorePages.module.scss'

function MorePages(){
    return(
        <div className={styles.containerMorePages}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Última</li>
            </ul>
        </div>
    )
}

export default MorePages