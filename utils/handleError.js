const handleError = (res, message = "ERROR",code=403 ) => {
    res.status(code);
    res.status({error: message })
}

module.exports = {handleError}