import React from "react";
import "./index.css";
const items = [
  {
    name: "troy",
    age: 23,
    discography: [
      {
        Title: "albums first title",
        singles: null,
        release: 2021,
        producers: [
          {
            name: "scottStorch",
            price: 10,
          },
        ],
      },
    ],
  },
  {
    name: "tremaine",
    age: 15,
    discography: [
      {
        Title: "blockwork",
        singles: null,
        release: 2021,
        producers: [
          {
            name: "scottStorch",
            price: 10,
          },
          {
            name: "KanyeWest",
            price: 100,
          },
          {
            name: "southside",
            price: 34,
          },
        ],
      },
    ],
  },
  {
    name: "bigPlug",
    age: 30,
    discography: [
      {
        Title: "Change it over",
        singles: "Five times Ten",
        release: 2021,
        producers: [
          {
            name: "kany West",
            price: 100,
          },
        ],
      },
      {
        Title: "Change it over",
        singles: "Five times Ten",
        release: 2021,
        producers: [
          {
            name: "kany West",
            price: 100,
          },
        ],
      },
    ],
  },
];

function Post({ rand }) {
  return (
    <div className="Container">
      {items.map((item) => {
        return (
          <div className="card shadow" style={{ width: "18rem" }}>
            <div className="inner">
              <img
                src={`https://picsum.photos/200/300?random=${rand}`}
                className="card-img-top"
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <ul>
                {item.discography.map((album) => {
                  return <li>{album.Title}</li>;
                })}
              </ul>
              <a href="#" className="btn btn-success">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
