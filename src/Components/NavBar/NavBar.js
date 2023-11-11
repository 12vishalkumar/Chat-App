//----------------------------------- Importing style -------------------------//
import style from './NavBar.module.css';


//----------------------------------- Navbar function -------------------------//
function NavBar() {

    //------------------------------- Return the UI ---------------------------//
    return(
        <>
            <nav className={style.navBar}>
                <div className={style.title}>
                    <h2>ChatApp</h2>
                </div>
                <div className={style.logo}>
                    <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="user"/>
                </div>
            </nav> 
        </>
    )
}

//------------------------------- default exporting function ---------------//
export default NavBar;