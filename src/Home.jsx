import "./assets/index.less";
import React from "react";
import Select from 'rc-select';
import Pagination from "rc-pagination";
import "rc-select/assets/index.less";

// const textItemRender = (current, type, element) => {
//   console.log(current, type, element);

//   if (type === "prev") {
//     return "Prev";
//   }
//   if (type === "next") {
//     return "Next";
//   }
//   return element;
// };

// const App = () => (
//   <>
//     <Pagination total={100} itemRender={textItemRender} />
//   </>
// );

// export default App;


const localeInfo = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',

  // Pagination
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size',
}

function onShowSizeChange(current, pageSize) {
  console.log(current);
  console.log(pageSize);
}

function onChange(current, pageSize) {
  console.log('onChange:current=', current);
  console.log('onChange:pageSize=', pageSize);
}

const App = () => (
  <Pagination
    selectComponentClass={Select}
    showQuickJumper
    showSizeChanger
    defaultPageSize={20}
    defaultCurrent={5}
    onShowSizeChange={onShowSizeChange}
    onChange={onChange}
    total={450}
    locale={localeInfo}
  />
);

export default App;
