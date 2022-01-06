import React from 'react'

const numbers=[
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

const getNextNumber=(number)=>{
    if(number<9){
        return numbers[number+1];
    }else{
        return numbers[0];
    }
}

const getPreNumber=(number)=>{
    if(number>0){
        return numbers[number-1];
    }else{
        return numbers[9];
    }
}

export default function NumberWheel(props) {
    const [currentNum,setCurrentNum]=React.useState(Number(props.number,10));
    const [y,setY]=React.useState(-105);

    const onChange=()=>{

    }

    const plus=()=>{
        if(y>-210)
            setY(y-5);
        else
            setY(0);
    }

    const minus=()=>{
        if(y<0)
            setY(y+5);
        else
            setY(0);
    }

    return (
        <div style={{transform:`translate(0,${y}%)`}}>
            <div>
                {getPreNumber(currentNum)}
            </div>
            <div>
                {currentNum}
            </div>
            <div>
                {getNextNumber(currentNum)}
            </div>
        </div>
    )
}
