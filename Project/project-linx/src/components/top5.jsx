import React from 'react';
//import Json from '../api/consumirJson';

function Top5(){
    return(
        <div className="center top5__geral">
            <h2 className="top5__titulo">Top 5</h2>
            <ul className="top5__list">
                <li className="top5__list__item">
                    <a href="https://www.google.com" className="top5__item__nome">Item 1</a>
                    <span className="top5__item__cliques">2</span>
                </li>
                <hr />
                <li className="top5__list__item">
                    <a href="https://www.google.com" className="top5__item__nome">Item 2</a>
                    <span className="top5__item__cliques">2</span>
                </li>
                <hr />
                <li className="top5__list__item">
                    <a href="https://www.google.com" className="top5__item__nome">Item 3</a>
                    <span className="top5__item__cliques">2</span>
                </li>
                <hr />
                <li className="top5__list__item">
                    <a href="https://www.google.com" className="top5__item__nome">Item 4</a>
                    <span className="top5__item__cliques">2</span>
                </li>
                <hr />
                <li className="top5__list__item">
                    <a href="https://www.google.com" className="top5__item__nome">Item 5</a>
                    <span className="top5__item__cliques">2</span>
                </li>
                <hr />
            </ul>
        </div>
    )
}

export default Top5;