import data from "../data/input.json";
import { IData } from "../API";


const search = (keyword: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let searchResults: { id: number; name: string; }[] = [];
            searchResults = data.filter((item: IData) => item.name.toLowerCase().includes(keyword.toLowerCase()));
            resolve(searchResults);
        }, 500);
    });
};

export {
    search
}