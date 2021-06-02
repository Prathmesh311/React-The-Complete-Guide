import useHttp from '../../Hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

  const enterTaskHandler = async (taskText) => {

    const createTask = (taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }

    sendTaskRequest(
      {url: 'https://react-http-10733-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST', 
      body: {test: taskText}
    }, createTask())
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
