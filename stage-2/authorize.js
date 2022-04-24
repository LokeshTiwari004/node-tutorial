const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'lokesh') {
        req.user = {user, id:1}
        next()
    } else {
        res.status(401).send('UnAuthorize Access');
    }
}

module.exports = authorize;