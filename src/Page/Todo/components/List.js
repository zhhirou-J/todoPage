import Edit from "./Edit"
import Item from "./Item";


const List = () => {
    const existingData = localStorage.getItem('data');
    const data = existingData ? JSON.parse(existingData) : [];

    const Item = ({key, task, category, date }) => {
      return (
        <div>
          <p>{key}</p>
          <p>{task}</p>
          <p>{category}</p>
          <p>{date}</p>
        </div>
      );
    };
    

    return (
      <div>
        {data.map((item, index) => (
          <Item
            key={index}
            task={item.task}
            category={item.category}
            date={item.date}
          />
        ))}
      </div>
    );
  };
  
  export default List;
  