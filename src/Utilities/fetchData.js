export const exerciseOptions=  {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '7c887f9ff1msh732f9f11eaf8adbp14a164jsn5ef96923dc2f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options)=>{
    const response=await fetch(url, options)
    const data=await response.json();

    return data;
}