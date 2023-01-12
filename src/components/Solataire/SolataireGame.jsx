import { useEffect } from "react";
import '../../App.css';

function SolataireGame() {

    const [cardCount, setCardCount] = setState(52);
    const cardValues = {
        "Ace":1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        10:10,
        "Jack": 11,
        "Queen": 12,
        "King":13,
    }
    let [cards, setCards] = setState([]);

    return ( 
        <div className="SolataireGame">
        </div>
     );
}

export default SolataireGame