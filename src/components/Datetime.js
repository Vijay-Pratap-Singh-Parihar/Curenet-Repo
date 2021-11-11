var datetime = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'-'+(showdate.getMonth()+1)+'-'+showdate.getFullYear();
    var dt = showdate.toLocaleString();

    return(
        <div>
            <input className = "datetime" type='text' value={[displaytodaysdate],[dt]} readOnly="true" />
            
        </div>
    );
}

export default datetime;