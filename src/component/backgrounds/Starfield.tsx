'use client';

import React, { useEffect } from 'react';

interface Props {
    speedFactor?: number;
    backgroundColor?: string;
    starColor?: [number, number, number];
    starCount?: number;
}

//sourced from https://medium.com/designly/how-to-create-an-animated-space-stars-background-effect-in-react-next-js-2806b630379c
export default function Starfield(props: Props) {
    const { speedFactor = 0.05, backgroundColor = 'black', starColor = [255, 255, 255], starCount = 5000 } = props;

    useEffect(() => {
        const canvas = document.getElementById('starfield') as HTMLCanvasElement;

        if (canvas) {
            const c = canvas.getContext('2d');

            if (c) {
                let width = window.innerWidth;
                let height = window.innerHeight;

                const setCanvasExtents = () => {
                    canvas.width = width;
                    canvas.height = height;
                };

                setCanvasExtents();

                window.onresize = () => {
                    setCanvasExtents();
                };

                const makeStars = (count: number) => {
                    const out = [];
                    const centerX = width / 2;
                    const centerY = height / 2;
                    const armCount = 5;
                    const armLength = Math.min(width, height) / 4;
                    const armGap = 20;
                    const angleIncrement = 0.1;
                    let angle = 0;

                    for (let i = 0; i < count; i++) {
                        const armIndex = i % armCount;
                        const armAngle = angle + (armIndex * Math.PI * 2) / armCount;
                        const armRadius = armIndex * armGap + armLength * (1 - (i / count));
                        const x = centerX + Math.cos(armAngle) * armRadius;
                        const y = centerY + Math.sin(armAngle) * armRadius;
                        const z = Math.random() * 1000;
                        out.push({ x, y, z });
                        angle += angleIncrement;
                    }
                    return out;
                };

                let stars = makeStars(starCount);

                const clear = () => {
                    c.fillStyle = backgroundColor;
                    c.fillRect(0, 0, canvas.width, canvas.height);
                };

                const putPixel = (x: number, y: number, brightness: number) => {
                    const rgb =
                        'rgba(' + starColor[0] + ',' + starColor[1] + ',' + starColor[2] + ',' + brightness + ')';
                    c.fillStyle = rgb;
                    c.fillRect(x, y, 1, 1);
                };

                const moveStars = (distance: number) => {
                    const count = stars.length;
                    for (var i = 0; i < count; i++) {
                        const s = stars[i];
                        s.z -= distance;
                        while (s.z <= 1) {
                            s.z += 1000;
                        }
                    }
                };

                let prevTime: number;
                const init = (time: number) => {
                    prevTime = time;
                    requestAnimationFrame(tick);
                };

                const tick = (time: number) => {
                    let elapsed = time - prevTime;
                    prevTime = time;
                    moveStars(elapsed * speedFactor);
                    clear();

                    const count = stars.length;
                    for (let i = 0; i < count; i++) {
                        const star = stars[i];
                        const x = star.x / (star.z * 0.001);
                        const y = star.y / (star.z * 0.001);
                        if (x < 0 || x >= width || y < 0 || y >= height) {
                            continue;}
                        const d = star.z / 1000.0;
                        const b = 1 - d * d;
                        putPixel(x, y, b);
                    }
                    requestAnimationFrame(tick);
                };
                requestAnimationFrame(init);

                window.addEventListener('resize', function () {
                    width = window.innerWidth;
                    height = window.innerHeight;
                    setCanvasExtents();
                });
            }
            else {
                console.error('Could not get 2d context from canvas element');
            }
        }
        else {
            console.error('Could not find canvas element with id "starfield"');
        }
        return () => {
            window.onresize = null;
        };
    }, [starColor, backgroundColor, speedFactor, starCount]);

    return (
        <canvas
            id="starfield"
            style={{
                padding: 0,
                margin: 0,
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 10,
                opacity: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen',
            }}>
        </canvas>
    );
}
