const PrintProduct = ({Id, Name, Price,Category, onDeleteClick }) => {
    return (
      <div className="container">
        <br></br>
        <ul>
           ID : {Id} ,
          Product-Name : {Name} ,
          Price : {Price} ,
          Category : {Category} .
            <br></br>
            <button type="button" className="btn btn-danger" onClick={onDeleteClick}>
              Delete
            </button>
            </ul>
        </div>
    );
  };

  export default PrintProduct;