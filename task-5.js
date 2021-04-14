function areaOfTriangle(x,y,z) {
    let holder = 0.5 * (x + y + z); 
    let a = holder - x;
    let b = holder - y;
    let c = holder - z;
    let heron = a * b * c;
    let area = Math.sqrt(holder * heron);
    console.log(area);
}

