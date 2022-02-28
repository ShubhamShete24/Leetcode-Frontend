import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Problem() {
  const [problem, setProblem] = useState([])
  const [topic, setTopic] = useState([])
  const [difficulty, setDifficulty] = useState([])

  const fetchProblem = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/problem';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProblem(data))
  };

  const fetchTopic = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/topic';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopic(data))
  };

  const fetchDifficulty = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/difficulty';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDifficulty(data))
  };

  useEffect(() => {
    fetchProblem();
    fetchTopic();
    fetchDifficulty();
  }, []);

  const myArray = Object.values(problem);
  const arrtopic = Object.values(topic);
  const arrDifficulty = Object.values(difficulty);
  // console.log(arrtopic);

  let topicName = ""
  let difficultyName = ""

  return (
    <>
      <div className='container my-2'>
        <h2>Enter Questions Here :</h2>
      </div>
      <div className="container">
        <div className="container my-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Topic</th>
                <th scope="col">Diificulty Level</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            {myArray.map((ele, index) => {
              return ele.map((a) => {
                arrtopic.map((topic) => {
                  return topic.map((top) => {
                    if (a[2] === top[0]) {
                      topicName = ""
                      topicName += top[1]
                      // console.log(a[2],top[0]);
                    }
                    return topicName
                  })
                })
                arrDifficulty.map((difficulty) => {
                  return difficulty.map((diff) => {
                    if (a[3] === diff[0]) {
                      difficultyName = ""
                      difficultyName += diff[1]
                      // console.log(topicName);
                    }
                    return difficultyName
                  })
                })
                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{a[0]}</th>
                        <td>{topicName}</td>
                        <td>{difficultyName}</td>
                        <td>{a[4]}</td>
                        <td><Link className='btn btn-info m-2' to={`/${a[0]}`}>Details</Link></td>
                        {/* <td><button type="button" className="btn-sm btn-primary mx-2">Details</button></td> */}
                      </tr>
                    </tbody>
                  </>
                );
              });
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default Problem;