import React from "react";
import Sketch from "react-p5";
import getNoise from './../generate';
import getBiome from './../biome';

const width = 128, height = 128;

function Visual()
{
    const setup = function(p5, canvasParentRef)
    {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(255, 255, 255);

        for (let y = 0; y < height; y++) 
        {
            for (let x = 0; x < width; x++) 
            {      
                let values = getNoise(width, height);
                let c = values[y][x] * 255; //getBiome(values[y][x]);
                p5.noStroke();
                p5.fill(c);
                p5.rect(x, y, 1, 1);
            }
        }
    };

    const draw = function(p5)
    {
        
    };

    return <Sketch setup={setup} draw={draw} />;
}

export default Visual;


