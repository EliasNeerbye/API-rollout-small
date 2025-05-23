const getStatus = (req, res) => {
    const status = {
        status: 'OK',
        message: 'Server is running smoothly',
        timestamp: new Date().toISOString()
    };

    res.status(200).json(status);
}

module.exports = { getStatus };