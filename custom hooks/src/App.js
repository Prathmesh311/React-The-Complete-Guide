import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './Hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp()

  useEffect(() => {
    function transformTask(taskObj){
      const loadedTasks = []
      for(const taskKey in taskObj){
        loadedTasks.push({id: taskObj.id, text: taskObj.text});
      }
      setTasks(loadedTasks);
    }

    fetchTasks(
      {url: "https://react-http-10733-default-rtdb.firebaseio.com/tasks.json"},
       transformTask);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
