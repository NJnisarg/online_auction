module.exports = {
    'response' : (res,status,err,msg,data) => {
        resp = {
            status,err,msg,data
        };
        res.json(resp);
    }
}