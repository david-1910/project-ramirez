import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function NixieClock() {
    const [isOn, setIsOn] = useState(true);
    const [displayChars, setDisplayChars] = useState(Array(12).fill('0'));

    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            let amPm = hours >= 12 ? 'PM' : 'AM';

            if (hours > 12) {
                hours -= 12;
            } else if (hours === 0) {
                hours = 12;
            }

            let timeStr = hours.toString().padStart(2, '0') + minutes;
            if (timeStr.startsWith('0')) {
                timeStr = ' ' + timeStr.slice(1);
            }

            let month = (now.getMonth() + 1).toString().padStart(2, '0');
            let day = now.getDate().toString().padStart(2, '0');
            const year = now.getFullYear().toString().slice(-2);

            if (month.startsWith('0')) {
                month = ' ' + month.slice(1);
            }
            if (day.startsWith('0')) {
                day = ' ' + day.slice(1);
            }

            const displayStr = timeStr + amPm + month + day + year;
            setDisplayChars(displayStr.split(''));
        };

        updateTimeAndDate();
        const interval = setInterval(updateTimeAndDate, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, position: 'relative' }}>
            <div className="nixie-container">
                <svg id="noise-svg">
                    <filter id='noiseFilter'>
                        <feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch' />
                    </filter>
                    <rect id="noise-rect" filter='url(#noiseFilter)' />
                </svg>

                <div className={`clock ${!isOn ? 'off' : ''}`}>
                    <div className="shadow"></div>

                    <div className="base-container">
                        <div className="base">
                            <div className="base-inner"></div>
                        </div>
                    </div>

                    <div className="small-outer-pipe">
                        <div className="small-inner-pipe"></div>
                    </div>

                    <div className="outer-pipe">
                        <div className="inner-pipe"></div>
                    </div>

                    <div className="pipe-accents">
                        <div className="top-tube"></div>
                        <div className="tube-holders">
                            <div className="tube-holder"></div>
                            <div className="tube-holder"></div>
                            <div className="tube-holder"></div>
                            <div className="tube-holder"></div>
                            <div className="tube-holder"></div>
                            <div className="tube-holder"></div>
                        </div>
                        <div className="top"></div>
                        <div className="topinset">
                            <div className="topinset-inner"></div>
                        </div>
                        <div className="left">
                            <div className="pipe-accent"></div>
                            <div className="pipe-accent"></div>
                            <div className="pipe-accent"></div>
                        </div>
                        <div className="right">
                            <div className="pipe-accent"></div>
                            <div className="pipe-accent"></div>
                            <div className="pipe-accent"></div>
                        </div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                    </div>

                    <div className="display">
                        <div className="row">
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[0]}</div>
                                <div>{displayChars[0]}</div>
                            </div>
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[1]}</div>
                                <div>{displayChars[1]}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[2]}</div>
                                <div>{displayChars[2]}</div>
                            </div>
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[3]}</div>
                                <div>{displayChars[3]}</div>
                            </div>
                        </div>
                        <div style={{ height: '0.2em' }}></div>
                        <div className="small-row">
                            <div className="row">
                                <div className="col">
                                    <div>8</div>
                                    <div>{displayChars[4]}</div>
                                    <div>{displayChars[4]}</div>
                                </div>
                                <div className="col">
                                    <div>8</div>
                                    <div>{displayChars[5]}</div>
                                    <div>{displayChars[5]}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[6]}</div>
                                <div>{displayChars[6]}</div>
                            </div>
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[7]}</div>
                                <div>{displayChars[7]}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[8]}</div>
                                <div>{displayChars[8]}</div>
                            </div>
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[9]}</div>
                                <div>{displayChars[9]}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[10]}</div>
                                <div>{displayChars[10]}</div>
                            </div>
                            <div className="col">
                                <div>8</div>
                                <div>{displayChars[11]}</div>
                                <div>{displayChars[11]}</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-tube"></div>
                    <div className="hex">
                        <div className="overlay"></div>
                    </div>

                    <div className="tube-base-container">
                        <div className="wires">
                            <div className="wire"></div>
                            <div className="wire"></div>
                        </div>
                        <div className="tube-base"></div>
                        <div className="rods">
                            <div className="left-rod"></div>
                            <div className="center-rod"></div>
                            <div className="right-rod"></div>
                        </div>
                        <div className="tube-btm"></div>
                    </div>

                    <div className="power-cord">
                        <div className="cord-1"></div>
                        <div className="cord-2"></div>
                    </div>

                    <div className="button" onClick={() => setIsOn(!isOn)}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}