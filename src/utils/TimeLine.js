import React from 'react';
import './TimeLine.css';

(function () {
    "use strict"

    const items = document.querySelectorAll(".timeline li");

    function isElementInViewPort(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewPort(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

function TimeLine() {
    return (
        <>
            <div className='timeline'>
                <ul>
                    <li>
                        <div>
                            Muncul pada <time>2014</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            Semakin Berkembang Kegiatan <time>2017</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            Tim Surabaya Dev generasi 1.0 <time>2018</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            Tim Surabaya Dev generasi 2.0 Online Version <time>2020</time>
                        </div>
                    </li>
                    <li>
                        <div>
                            Generasi 3.0 kamu masuk sejarah di tahun ini <time>2023</time>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TimeLine;