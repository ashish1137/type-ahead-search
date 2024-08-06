import { useState } from 'react';
import {search} from '../actions/actions'
import { IData } from "../API";

function TypeaheadSearch() {

    const [results, setResults] = useState([]);
    const [name, setName] = useState("");
    const [isNameSelected, setIsNameSelected] = useState(false);

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const nameValue = e.target.value;
        setName(nameValue);
        setIsNameSelected(false);
        setResults([]);
        if (nameValue.length > 1) { //Start searching only after user has entered at least two chars
            search(nameValue)
                .then((res: any) => {
                    setResults(res);
                })
                .catch((err) => {
                    console.log('Failed to set results', err);
                });
        }
    };

    const onSelected = (value: IData) => {
        setName(value.name);
        setResults([]);
    };

    return (
        <div className="row mb-3 mt-5">
             <div className="col-sm-3"></div>
            <label htmlFor="inputSearch" className="col-sm-1 col-form-label">Search</label>
            <div className="col-sm-4">
                <div
                    style={{
                        display: isNameSelected ? "block" : "none",
                        width: "200vw",
                        height: "200vh",
                        backgroundColor: "transparent",
                        position: "fixed",
                        zIndex: 0,
                        top: 0,
                        left: 0
                    }} />
                <div className="input-group mb-3">
                    <input
                        id="inputSearch"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Type something like hello..."
                        className="form-control" />
                </div>
                {results.length > 0 && (
                    <ul className="list-group">
                        {results.map((item: IData) => (
                            <li className="list-group-item" key={item.id} onClick={() => onSelected(item)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TypeaheadSearch;