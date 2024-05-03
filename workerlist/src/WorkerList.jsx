import React from "react";
import PropTypes from "prop-types";

const WorkerList = ({ workers }) => {
  return (
    <div>
      {workers.map((worker) => (
        <div key={worker.id}>{worker.name}</div>
      ))}
    </div>
  );
};

WorkerList.propTypes = {
  workers: PropTypes.array.isRequired,
};

export default WorkerList;
