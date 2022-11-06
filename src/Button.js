function Button({filteredWatch}) {
    return (
        <div className="cont">
            <button className="change" onClick = {() => filteredWatch("womensWatch")}>Women's Collection</button>
            <button className="change" onClick = {() => filteredWatch("mensWatch")}>Men's Collection</button>
            <button className="change" onClick = {() => filteredWatch("clock")}>Home Collection</button>
        </div>
    )
}

export default Button;