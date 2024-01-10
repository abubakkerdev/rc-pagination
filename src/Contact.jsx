import React from "react";
import Pagination from "rc-pagination";
import "./assets/index.less";

const Contact = () => (
  <>
    <Pagination showTotal={(total) => `Total ${total} items`} total={455} />
    <br />
    <Pagination
      showTotal={(total, range) =>
        `${range[0]} - ${range[1]} of ${total} items`
      }
      total={455}
    />
    <br />
    <Pagination
      showTotal={(total, range) =>
        `${range[0]} - ${range[1]} of ${total} items`
      }
      total={300}
    />
  </>
);

export default Contact;
