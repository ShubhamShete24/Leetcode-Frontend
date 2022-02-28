import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topic from './Topic';

function Difficulty() {
    const [difficultyList, setDifficulty] = useState([]);
    const [level, setLevel] = useState('');

    const fetchtopic = () => {
        let url = 'http://127.0.0.1:8000/ProblemCreation/difficulty';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDifficulty(data))
    };

    useEffect(() => {
        fetchtopic();
    }, []);

    const handleOnchange = (event) => {
        setLevel(event.target.value);
    }

    const handleOnClickPost = () => {
        const lastele = myArray[0];
        console.log(lastele);
        let lastelem = 0;
        if (lastele.length === 0) { lastelem = 1 }
        else { lastelem = lastele[lastele.length - 1][0] + 1 };
        console.log(lastelem, level);
        axios
            .post('http://127.0.0.1:8000/ProblemCreation/difficulty', {
                DiffID: lastelem,
                DiffLevel: level,
            })
            .then(function (response) {
                console.log(response);
                fetchtopic()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleOnClickPut = (id) => {
        // console.log(level, id);
        axios
            .put(`http://127.0.0.1:8000/ProblemCreation/difficulty/${id}`, {
                DiffLevel: level
            })
            .then(function (response) {
                console.log(response);
                fetchtopic()
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleOnClickDelete = (id) => {
        console.log(id, level);
        axios
            .delete(`http://127.0.0.1:8000/ProblemCreation/difficulty/${id}`, {
            })
            .then(function (response) {
                console.log(response);
                fetchtopic()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const myArray = Object.values(difficultyList);

    return (
        <>
            <div className='container my-3'>
                <h2><b> Problem - Difficulty Level</b></h2>
            </div>
            <div className='container'>
                <input type="text" onChange={handleOnchange} className='mx-3' placeholder='Enter Difficulty Level' />
                <button type="button" onClick={handleOnClickPost} className="btn-sm btn-primary mx-2">POST</button>
                <div className="container">
                    {myArray.map((ele, index) => {
                        return ele.map((a) => {
                            return (
                                <>
                                    <div className="container my-3" key={index}>
                                        {a[0]} :- {a[1]}
                                        {/* {console.log(a)} */}
                                    </div>
                                    <span><button type="button" onClick={() => handleOnClickPut(a[0])} className="btn-sm btn-primary mx-2">PUT</button></span>
                                    <span><button type="button" onClick={() => handleOnClickDelete(a[0])} className="btn-sm btn-primary mx-2">DELETE</button></span>
                                </>
                            );
                        });
                    })}
                </div>
            </div>
            <Topic />
        </>
    )
}

export default Difficulty;