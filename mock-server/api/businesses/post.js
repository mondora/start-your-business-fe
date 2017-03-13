module.exports = function (req, res) {
    global.templateDraft = req.body;
    res.status(200).send('Template saved correctly');
};
