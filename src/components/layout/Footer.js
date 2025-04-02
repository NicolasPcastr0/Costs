import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>Costs</span> &copy; 2025
            </p>
        </footer>
    )
}

export default Footer