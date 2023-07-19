class Request {
    constructor(w, u, v, m) {
        this.method = w;
        this.uri = u;
        this.version = v;
        this.message = m;
        this.response = undefined;
        this.fulfilled = false;
    }

}

let myData = new Request('GET', 
'http://google.com', 'HTTP/1.1', '')
console.log(myData);
