const Card = require('../../modals/Card')

class cardComponent {
    async getCard(req, res) {
        try {
            const find = await Card.find({})
            return res.json(find)
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

module.exports = new cardComponent()