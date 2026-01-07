import { Button, Input, Checkbox } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import "./todo.css"

function App() {

  return (
    <>
      <div className='main'>
        <h1>Task Master</h1>
        <div className='task-creator'>
          <Input placeholder="Task to be added" />
          <Button type="primary">Add</Button>
        </div>
        <div className='task-filter'>
          <Button type="primary">All</Button>
          <Button type="default">In Progress</Button>
          <Button type="default">Completed</Button>
        </div>
        {['1', '2', '3'].map(item => {
          return <div className='task'>
            <Checkbox>{item}</Checkbox>
            <Button type="default" shape='circle' icon={<DeleteTwoTone />} />

          </div>
        })}
        <div className='stats'>
          Total | In Progress | Completed
        </div>
      </div>
    </>
  );
}

export default App;
