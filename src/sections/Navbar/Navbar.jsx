import { useState } from 'react';
import './Navbar.css';
import { RiSearchLine, RiUserFill, RiHeartFill, RiShoppingCartFill, RiMenuFill, RiCloseFill } from 'react-icons/ri';

const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <header>
            <nav>
                <div className="tn-container container">
                    <a href="/" className="logo">MiniQuest</a>
                    <div className="search-box">
                        <input type="search" className="search" id="" placeholder='Search for products' />
                        <div className="search-icon"><RiSearchLine /></div>
                    </div>
                    <div className="tn-icons">
                        <a href="/" className=""><RiUserFill /></a>
                        <a className='fav-icon' href="/" ><RiHeartFill /><span className='count'>0</span></a>
                        <a className='cart-icon' href="/" ><RiShoppingCartFill /><span className='count'>0</span></a>
                    </div>
                </div>
                <hr />
                <div className="bn-container container">
                    <ul className="navList">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#deal">Deal</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="nm-nav" >
                    <div className="nm-container container">
                        <a href="" className="logo">MiniQuest</a>
                        <ul className="nav-menu" style={{ transform: menuOpened && "translate(0%"}}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#deal">Deal</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div className="menu-btn">
                            {menuOpened ?
                                <RiCloseFill size={30} onClick={() => setMenuOpened(false)} /> :
                                <RiMenuFill size={30} onClick={() => setMenuOpened(true)} />}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
