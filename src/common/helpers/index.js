export const filterData = (data, str) => {
    return str.length > 0 
    ? data.filter((obj)=>{
        return Object.keys(obj).reduce((acc, curr)=>{
              return acc || obj[curr].toLowerCase().includes(str);
        }, false);
   })
   : data;
}