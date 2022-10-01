import "./MenuButton.css"
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignRight, FaAlignJustify, FaListOl, FaListUl } from 'react-icons/fa';

const boldHandler = () => {
    console.log('first')
}

function MenuButton() {
    return (
        <div className="menuContainer">
            <button onClick={boldHandler}><FaBold /></button>
            <button><FaItalic /></button>
            <button><FaUnderline /></button>
            <button><FaAlignLeft /></button>
            <button><FaAlignJustify /></button>
            <button><FaAlignRight /></button>
            <button><FaListOl /></button>
            <button><FaListUl /></button>
        </div>
    )
}
export default MenuButton;