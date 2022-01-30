function getBiome(v)
{
    if(v < 0.3) return "rgb(0, 0, 255)";
    else if(v < 0.4) return "rgb(219, 210, 181)";
    else if(v < 0.6) return "rgb(65, 152, 10)";
    else if(v < 0.7) return "rgb(19, 109, 21)";
    else if(v < 0.8) return "rgb(55, 55, 55)";
    else if(v < 0.9) return "rgb(255, 255, 255)";
}

export default getBiome;