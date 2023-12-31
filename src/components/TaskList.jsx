import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../feature/taks/tasksSlice";
import { NavLink } from "react-router-dom";
import { Card, Col, Divider, List, Row } from "antd";
import "./styles.scss";

import { motion, useScroll } from "framer-motion";

const TaskFooter = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="task-footer">
      <Divider />
      <Row gutter={16}>
        <Col>
          <button onClick={() => handleDelete(taskId)}>Delete</button>
        </Col>
        <Col>
          <NavLink to={`update-task/${taskId}`}>Update</NavLink>
        </Col>
      </Row>
    </div>
  );
};

const CardComponente = ({ task }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <section>
        <Card title={task.title} className="task-card">
          <div className="tasklist_description">{task.description}</div>
          <TaskFooter taskId={task.id} />
        </Card>
      </section>
    </motion.div>
  );
};

function TaskList() {
  const tasksList = useSelector((state) => state.tasks);

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 3,
        }}
        dataSource={tasksList}
        header={
          <header>
            <h1 className="list-header">Tasks {tasksList.length}</h1>
            <NavLink to="/add-task">Create Task</NavLink>
          </header>
        }
        renderItem={(task) => (
          <List.Item>
            <CardComponente task={task} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default TaskList;
