  export function addZero(num: number | string):string {
    return Number(num) < 10 ? `0${num}` : String(num)
  }