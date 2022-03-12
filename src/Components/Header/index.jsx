import React, {useContext} from "react";
import Logo from "../../images/logoTienda-2.png"
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/Dataprovider";

export const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    console.log(menu);

    const toogleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="150" />
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/Productos">PRODUCTOS</Link>
                    </li>
                    <li>
                        <Link to="/">NOSOTROS</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACTANOS</Link>
                    </li>
                </ul>
                <div className="cart" onClick={toogleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item__total"> {carrito.length} </span>
                </div>
            </header>
        </>
    )
}