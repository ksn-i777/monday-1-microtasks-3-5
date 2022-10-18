import React, {useState} from 'react';
import './App.css';
import {Table} from "./components/Table";
import {Button} from "./components/Button";

function App() {
    /*const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (n: number) => {
        console.log(n)
    }
    return (
        <div className="App">
            <button onClick={foo1}>Button-1</button>
            <button onClick={() => foo2(100200)}>Button-2</button>
        </div>
    );*/

    /*const call = (user: string) => {
        alert(`${user} here`)
    }
    return (
        <div className="App">
            <Button name={"Button-1"} action={()=>call("Ivan")}/>
            <Button name={"Button-2"} action={()=>call("Petr")}/>
            <Button name={"Button-3"} action={()=>call("Pavel")}/>
        </div>
    );*/

    /*let [actualNum, setActualNum] = useState(0)
    const useChangeNum = () => {
        setActualNum(++actualNum);
    }
    const resetNum = () => {
        setActualNum(0)
    }
    return (
        <div className="App">
            <h1>{actualNum}</h1>
            <Button name={'+'} action={useChangeNum}/>
            <Button name={'x'} action={resetNum}/>
        </div>
    );*/

    const all = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    let [money, setMoney] = useState(all)

    const useChooseALL = () => {
        setMoney(all)
    }
    const useChooseUSD = () => {
        money = all
        const usd = money.filter((el)=>el.banknots === 'Dollars')
        setMoney(usd)
    }
    const useChooseRUB = () => {
        money = all
        const rub = money.filter((el)=>el.banknots === 'RUBLS')
        setMoney(rub)
    }

    return (
        <div className="App">
            <Table state={money}/>
            <div style={{marginLeft: "50px"}}>
                <Button name={'ALL'} action={useChooseALL}/>
                <Button name={'USD'} action={useChooseUSD}/>
                <Button name={'RUB'} action={useChooseRUB}/>
            </div>
        </div>
    );
}

export default App;
