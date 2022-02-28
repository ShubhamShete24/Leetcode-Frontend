import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Topic() {
  const [topicList, setTopicList] = useState([]);

  const [topic, setTopic] = useState('');

  const fetchtopic = () => {
    let url = 'http://127.0.0.1:8000/topic';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopicList(data));
  };
  console.log(topicList)
  useEffect(() => {
    fetchtopic();
  }, []);

  const handleOnchnage = (event) => {
    setTopic(event.target.value);
  };
  // console.log(topic);

  const handleOnClick = () => {
    // const lastele = topicList[""];
    // const lastelem = lastele[lastele.length - 1]["id"] + 1;
    const lastelem = topicList[topicList.length - 1]["id"] + 1;
    console.log(lastelem, topic);
    axios
      .post('http://127.0.0.1:8000/topic', {
        // id: lastelem,
        topicName: topic
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      fetchtopic()
  };

  return (
    <>
      <div className="container my-3">
        <h2>Topic</h2>
        <input type="text" onChange={handleOnchnage} />
        <button onClick={handleOnClick} type="button" className="btn btn-outline-primary mx-3">
          POST
        </button>
      </div>

      <div className="container">
        {topicList.map((ele, index) => {
        // console.log(ele['topicName'])
          return (
            <>
            <div>
              <div key={ele['id']}>{(ele['id'])}: {(ele['topicName'])}</div>
            </div>
            </>
          )
        })}
      </div>
    </>
  );
}

export default Topic;