import { isNumberDivisibleBy } from "./util";

export function isLeapYear(year: number): any {
    return isNumberDivisibleBy(year, 100) ? isNumberDivisibleBy(year, 400) : isNumberDivisibleBy(year, 4);
}
