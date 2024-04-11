import { Link } from 'react-router-dom'
import { DataStore } from '../store/DataStore.jsx'
import { useContext } from 'react'


const Sidebar = () => {
    const { arr, setArr } = useContext(DataStore)
    const handleOnClick = (value) => {
        setArr(value)
    }

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">FACEBOOK</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link text-white ${arr.includes('Home') && 'active'}`} aria-current="page" onClick={() => handleOnClick('Home')}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/form" className={`nav-link text-white ${arr.includes('Create-Post') && 'active'}`} onClick={() => handleOnClick('Create-Post')}>
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                            Create Post
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;