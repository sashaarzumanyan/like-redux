function Title(props) {
    console.log("title props >", props);
    const handleChange = (e) => {
        console.log("handle text >",e.target.value)

    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type='text' onChange={handleChange} />
            </div>
        </div>
    )
}

export default Title