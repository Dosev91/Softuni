function requestValidator(requestObj) {

    if (!requestObj.hasOwnProperty("method")) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!requestObj.hasOwnProperty("uri")) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!requestObj.hasOwnProperty("version")) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!requestObj.hasOwnProperty("message")) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];

    if (!validMethods.includes(requestObj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (requestObj.uri === "") {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (requestObj.uri !== "*" && !/^([a-zA-Z0-9.]+|\*)$/.test(requestObj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validVersion.includes(requestObj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!/^[^<>&'"\\]*$/.test(requestObj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return requestObj;
}
 
//a
// requestValidator({
//     method: 'GET',
//     uri: `git.master`,
//     version: 'HTTP/1.1',
//     message: '<script>alert("xss vulnerable")</script'
// });
// requestValidator({
//     method: 'GET',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '\r\n'
// });
// requestValidator({
//     method: 'GET',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '&copy;'
// });
// requestValidator({
//     method: 'GET',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '"value"'
// });
requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '; DROP TABLE'
});

