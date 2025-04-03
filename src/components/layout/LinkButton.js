import { Link } from 'react-router-dom'
import styler from './LinkButton.module.css'

function LinkButton({to, text}){
    return(
        <Link to={to} className={styler.btn}>
            {text}
        </Link>
    )
}   

export default LinkButton