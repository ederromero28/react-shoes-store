import Logo from "../../images/logoTienda-2.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="150px" />
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
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">0</span>
                </div>
            </header>
        </>
    )
}