import data from "../data/input.json";
import { IData } from "../API";


const search = (keyword: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            //In real world, I'd have called an API instead of reading from the json and hooked in useEffect(sample code below).
            //fetch(‘https://my-api-provider/api/books’)
                //.then(response => response.json())
                //.then(data => setData(data))
                //.catch(error => console.error('Error fetching data:', error));
            let searchResults: { id: number; name: string; }[] = [];
            searchResults = data.filter((item: IData) => item.name.toLowerCase().includes(keyword.toLowerCase()));
            resolve(searchResults);
        }, 500); //I've added a delay of 5 seconds so that search start only after the user has stopped typing for at least 5 seconds.
    });
};

export {
    search
}