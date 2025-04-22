import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loader_cont}>
            <img className={styles.loader} src={loading} />
        </div>
    )
}

export default Loading