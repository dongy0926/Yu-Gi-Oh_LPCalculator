import React from 'react';
import NumberWheel from '../NumberWheel/NumberWheel';
import './LifePointPanel.css';

export default function LifePointPanel() {
    const [lifePoint,setLiftPoint]=React.useState(8000);

    const resetLifePoint=()=>{
        setLiftPoint(8000);
    }

    const lifeArr=(""+lifePoint).split("");
    const generateKey=()=>{
        const keyCode = new Date().getTime().toString();
        const randomNum = Math.random()*10;
        const rawKey_1 = keyCode.substring(0,5)*randomNum;
        const rawKey_2 = keyCode.substring(8)*randomNum;
        return rawKey_1^rawKey_2;
    }

    return (
        <div id="calculator">
            {
                lifeArr.map(item=>{
                    return (
                        <NumberWheel key={generateKey()} number={item}/>
                    )
                })
            }
        </div>
    )
}
