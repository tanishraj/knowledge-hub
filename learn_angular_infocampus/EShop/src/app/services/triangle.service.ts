export class triangleService {
    areaOfTriangle(a, b, c){
        let semiPeri = (a+b+c)/2;
        let area = Math.sqrt(semiPeri*(semiPeri-a)*(semiPeri-b)*(semiPeri-c));
        return area;
    }
}