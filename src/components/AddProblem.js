import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

function Problem() {
  const [topicList, setTopicList] = useState([])
  const [difficultyList, setDifficultyList] = useState([])
  const [problemList, setProblemList] = useState([])
  const [authorID, setAuthorID] = useState()
  const [topicID, setTopicID] = useState()
  const [diffID, setDiffID] = useState()
  const [title, setTitle] = useState()
  const [que, setQue] = useState()
  const [ans, setAns] = useState()

  const fetchproblem = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/problem';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProblemList(data))
  };

  const fetchtopic = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/topic';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopicList(data))
  };
  const fetchDifficulty = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/difficulty';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDifficultyList(data))
  };

  useEffect(() => {
    fetchproblem();
    fetchtopic();
    fetchDifficulty();
  }, []);

  // const navigator = useNavigate()

  const AddProblem = () => {
    const lastele = myArray[0];
    console.log(lastele);
    let lastelem = 0;
    if (lastele.length === 0) { lastelem = 1 }
    else { lastelem = lastele[lastele.length - 1][0] + 1 };
    console.log(lastelem);
    console.log(authorID, topicID, diffID, title, que, ans);
    axios
      .post('http://localhost:8000/ProblemCreation/problem', {
        ProblemID: lastelem,
        Author: authorID,
        TopicID: topicID,
        DiffID: diffID,
        Title: title,
        Que: que,
        Ans: ans
      })
      .then(function (response) {
        console.log(response);
        fetchproblem();
        // navigator('/addProblem')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const myArray = Object.values(problemList);
  const arrtopic = Object.values(topicList);
  const arrdiff = Object.values(difficultyList);

  return (
    <>
      <div className='container my-2'>
        <h2>Enter Questions Here :</h2>
      </div>
      <div className='container form-group'>
        <div className='form-conrrol'>
          <div className='form-group my-3'>
            <input
              type="number"
              className='form-control form-control-lg'
              placeholder='Enter Author Name'
              name='authorID'
              value={authorID}
              onChange={(e) => setAuthorID(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <select onChange={(e) => setTopicID(e.target.value)}>
              <option >Select Topic</option>
              {arrtopic.map((topic) => {
                return topic.map((top) => {
                  return (
                    <>
                      <option>{top[1]}</option>
                    </>
                  )
                })
              })
              }
            </select>
          </div>
          <div className='form-group my-3'>
            <select onChange={(e) => setDiffID(e.target.value)}>
              <option >Select Difficulty Level</option>
              {arrdiff.map((difficulty) => {
                return difficulty.map((diff) => {
                  return (
                    <>
                      <option>{diff[1]}</option>
                    </>
                  )
                })
              })
              }
            </select>
          </div>
          <div className='form-group my-3'>
            <input
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <textarea
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Que'
              name='que'
              value={que}
              onChange={(e) => setQue(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <textarea
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Ans'
              name='ans'
              value={ans}
              onChange={(e) => setAns(e.target.value)}
            />
          </div>
          <button className='btn btn-success' onClick={AddProblem}>Add Problem</button>
        </div>
      </div>
    </>
  )
}

export default Problem;