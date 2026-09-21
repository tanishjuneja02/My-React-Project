
function List(props){


    const listitems = props.item
    const category = props.category

    return(
        <div>
            <h1>{category}</h1>
            <ul>
                {listitems.map( fruit => (<li key={fruit.id}>{fruit.name}</li>))}
            </ul>
        </div>
    );
}

export default List