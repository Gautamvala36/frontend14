class IO {
    $(id) {
        return document.getElementById(id);
    }
    html(id,message)
    {
        this.$(id).innerHTML += message; 
    }
}