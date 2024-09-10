const blockchainService = require('../services/blockchainService');

exports.deployContract = async (req, res) => {
    try {
        const result = await blockchainService.deployContract(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.interactWithContract = async (req, res) => {
    try {
        const result = await blockchainService.interactWithContract(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
