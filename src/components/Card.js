import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Card = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://kontests.net/api/v1/all").then((res) => {
      res.json().then((result) => {
        setLoading(false);
        setData(result);
      });
    });
  }, []);
  return (
    <Wrapper>
      {loading && <Loader />}
      <div className="box">
        {!loading &&
          data.map((ele) => {
            return (
              <div className="card">
                <h3>{ele.name}</h3>
                <h6>Start Time: {new Date(ele.start_time).toGMTString()}</h6>
                <h6>End Time: {new Date(ele.end_time).toGMTString()}</h6>
                <h6>Duration: {ele.duration}</h6>
                <br />
                <ul>
                  <li>
                    <b> Website:</b>
                    <br />
                    <a href={ele.url} target="_blank" rel="noreferrer">
                      {ele.site}
                    </a>
                  </li>
                  <li>
                    <b>Status: </b>
                    <br />
                    <span>{ele.status}</span>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .card {
      background: #fff8dc;
      flex: 0 0 20%;
      margin: 10px;
      box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7);
      transition: 0.3s;
      padding: 2%;
      line-height: 3.4vh;
      h3 {
        font-size: 1.4rem;
        font-weight: bold;
      }
      h6 {
        font-size: 1rem;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 4rem;
        line-height: 1.9vh;
        a {
          font-size: 0.9rem;
          text-decoration: none;
        }
        span {
          font-size: 0.9rem;
        }
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
export default Card;
