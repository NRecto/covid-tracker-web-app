/* This helper will sanittie the data/ statictics from rapidAPI. Because the statistics provided are numerical strings and has commas. THis helper will help re move the comma and turn the numerical strings into proper numbers */

export default function toNum(str) {
    const arr = [...str]
    
    const filteredArr = arr.filter( element => {
        return element !== ','
    })
    // console.log(filteredArr)

    return parseInt(filteredArr.reduce( (x,y) => {
        return x + y
    }))
}