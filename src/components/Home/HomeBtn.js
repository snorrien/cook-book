import React from "react";
import "./HomeBtn.css";

const HomeBtn = () => {
    return (
        <div class="container-home-btn">
            <a href="#" className="button button--piyo">
                <div class="button__wrapper">
                    <span class="button__text">ENTRY</span>
                </div>
                <div class="characterBox">
                    <div class="character wakeup">
                        <div class="character__face"></div>
                    </div>
                    <div class="character wakeup">
                        <div class="character__face"></div>
                    </div>
                    <div class="character">
                        <div class="character__face"></div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HomeBtn;