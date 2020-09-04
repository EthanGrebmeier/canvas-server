const express = require('express')
const router = express.Router()

const GridModel = require('../../models/Grid')

console.log('Grid')

router.get('/all', async (req, res) => {
    try {
        const gridData = await GridModel.find({}).lean()
        res.json(gridData)
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/:id', async (req, res) => {
    const gridID = req.params.id
    const gridData = req.body.gridData
    console.log("HERE")
    console.log(req.params);
    try {
        await GridModel.findByIdAndUpdate(gridID, gridData, {upsert: true, runValidators: true}).lean()
        res.sendStatus(200)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})


module.exports = router