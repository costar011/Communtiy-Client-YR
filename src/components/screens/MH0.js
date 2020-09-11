import React from "react";
import Reveal from "react-reveal/Reveal";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const menus = [];

class MH0 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          menusList: "List Board",
          link: "/listboard",
        },

        {
          menusList: "Free BOARD",
          link: "/freeboard",
        },
      ],
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <main className="MH0">
        <Reveal>
          <h1 className="MH0__title">YR Board</h1>
        </Reveal>
        <div className="MH0__menuBox">
          {menus.map((menu, idx) => {
            return (
              <Flip bottom delay={idx * 300} key={idx}>
                <Link to={menu.link}>
                  <div className="MH0__menuBox__list">{menu.menusList}</div>
                </Link>
              </Flip>
            );
          })}
        </div>
      </main>
    );
  }
}

export default MH0;
