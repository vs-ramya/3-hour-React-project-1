import { useState } from 'react';

const Details = ({addProduct}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onAddClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    //addproduct takes somearguments  passes the current values of id, name, price, and category as arguments to the addProduct function.
    addProduct(id, name, price,category);
    setId('');
    setName('');
    setPrice('');
    setCategory('')
  };

  return (
    <form className="container text-center m-5">
      <div className="row">
          <label> ID : </label> 
            <input type="number" placeholder="id no--" onChange={handleId} value={id} />
          <label>  Product Name : </label>
          <input type="text" placeholder="enter your product name" onChange={handleName} value={name} />
          <label> Price : </label>

            <input type="number" placeholder="selling price" onChange={handlePrice} value={price} />
        
          <label> Select Catagory : </label>
          <select onChange={handleCategoryChange} value={category}>
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="study">Study</option>
              <option value="shopping">Shopping</option>
            </select> 
            
        <div className="col">
        <br></br>
          <button className='btn btn-success' onClick={onAddClick} >   Add Product</button>
        </div>
        </div>

    </form>
  );
};

export default Details;