import React, { useState } from 'react'

function Problem() {
//   const [problem, setProblem] = useState([])
  const [authorID, setAuthorID] = useState()
  const [topicID, setTopicID] = useState()
  const [diffID, setDiffID] = useState()
  const [title, setTitle] = useState()
  const [que, setQue] = useState()
  const [ans, setAns] = useState()

//   const fetchtopic = () => {
//     let url = 'http://127.0.0.1:8000/ProblemCreation/problem';
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setProblem(data))
//   };

//   useEffect(() => {
//     fetchtopic();
//   }, []);

  const AddProblem = () => {

  }

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
            <input
              type="number"
              className='form-control form-control-lg'
              placeholder='Enter Topic Name'
              name='topicID'
              value={topicID}
              onChange={(e) => setTopicID(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <input
              type="number"
              className='form-control form-control-lg'
              placeholder='Enter Product Description'
              name='diffID'
              value={diffID}
              onChange={(e) => setDiffID(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <input
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Product Category'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <textarea
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Product Category'
              name='que'
              value={que}
              onChange={(e) => setQue(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <textarea
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Product Category'
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