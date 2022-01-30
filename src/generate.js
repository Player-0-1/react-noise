import SimplexNoise from 'simplex-noise';
let gen = new SimplexNoise();
function noise(nx, ny) 
{
    // Rescale from -1.0:+1.0 to 0.0:1.0

    return gen.noise2D(nx, ny) / 2 + 0.5;
}
  
function getNoise(width, height)
{
    let values = []; 
    for (let y = 0; y < height; y++) 
    {
        values[y] = [];
        for (let x = 0; x < width; x++) 
        {      
            let nx = x/width - 0.5, ny = y/height - 0.5;

            let v = 1 * noise(1 * nx, 1 * ny) +  0.5 * noise(2 * nx, 2 * ny) + 0.25 * noise(4 * nx, 4 * ny);
            v = v / (1 + 0.5 + 0.25);
            values[y][x] = Math.pow(v, 1);  
        }
    }

    return values;
}

export default getNoise;