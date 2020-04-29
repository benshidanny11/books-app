import React from 'react';

function Books(props) {
    return (
        <div>
          <li className="card-body list-group-item">
          <img src={props.imageUrl} className="img-fluid list-group-item" alt="Responsive image"/>
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-center">
           <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.title}</h5>
           </div>
           <p className="mb-1">{props.description}</p>
        <small class="text-muted">Auther:{props.auther}</small>
        </a>
          
          </li>
        </div>
    )
}

export default Books;
