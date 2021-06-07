import useHTTP from '../../hooks/useHTTP';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const transformTasks = (data, taskText) =>{
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    console.log(createdTask);
    props.onAddTask(createdTask);
  }

  const {isLoading, error, sendRequest : setTasks} = useHTTP(transformTasks);


  const enterTaskHandler = async (taskText) => {
    setTasks({
      url :  'https://dark-man-416e9-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
