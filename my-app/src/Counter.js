import React ,{ useState }from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './action';
import jsonData from './Data.json'


const Counter = () => {
  const dispatch = useDispatch();
  const items = jsonData["products"];
  const [selectedOption, setSelectedOption] = useState('1');
  const count = useSelector((state) => selectedOption);
  
  
  const handleChange = (event) => {
    dispatch(increment(setSelectedOption(Number(event.target.value))));
  };
  return (
    <div className='columnalign'>
        {items.map((item) => (
      <div className='row1'>
      <img width={100} height={100}
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
      <div className='contentSize'>
       <div className='textFormat'>{item.title}</div> 
       <div>{item.brand}</div>
       <div>{item.description}</div>
      </div>
      <div className='inputWidth'>
     
        <select id="options" value={selectedOption} onChange={handleChange} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>


      </div>
      </div>
      ))}
      <div className='amountFormat'><span>Total : </span> {count === -249 ? 0 : count * 249 }</div>
       
    </div>
  );
};

export default Counter;
