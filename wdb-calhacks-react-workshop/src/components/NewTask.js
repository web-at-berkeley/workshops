const NewTask = ({handleSubmit, handleChange, value}) => {
    return (

        <form onSubmit={handleSubmit}>
            <label>
                New task:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input className="button" type="submit" value="Submit" />
        </form>

    );
}
 
export default NewTask;