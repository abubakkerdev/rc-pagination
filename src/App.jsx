import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import "./assets/index.less";
import "rc-select/assets/index.less";
import { MdAdd } from "react-icons/md";

const App = () => {
  const [current, setCurrent] = useState(1);
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [arrNew, setArrNew] = useState([]);
  let showPerPageData = 3;
  let currentPage = 1;

  const onChange = (page) => {
    setArrNew(arr.slice((page - 1) * showPerPageData, showPerPageData * page));
    setCurrent(page);
  };

  useEffect(() => {
    setArrNew(arr.slice(currentPage == 1 ? 0 : currentPage, showPerPageData));
  }, []);

  const textItemRender = (current, type, element) => {
    if (type === "prev") {
      return <span>Submit</span>;
    }
    return element;
  };

  return (
    <div className="main">
      {arrNew?.map((el, index) => (
        <b key={index}>
          <button>THAT {el}</button> <br />
        </b>
      ))}

      <Pagination
        onChange={onChange}
        current={current}
        pageSize={3}
        total={arr.length}
        itemRender={textItemRender}
        nextIcon={<MdAdd />}
      />
    </div>
  );
};

export default App;
