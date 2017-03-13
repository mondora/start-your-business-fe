module.exports = function (req, res) {
    if (global.templateDraft) {
        res.status(200).send(global.templateDraft);
    } else {
        res.status(204).send({});
    }
};
