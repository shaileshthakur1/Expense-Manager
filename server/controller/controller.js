const { get } = require('mongoose');
const model = require('../models/model.js');

// Create Categories
async function create_Categories(req, res) {
    const Create = new model.Categories({
        type: "Investment",
        color: '#C43095',
    });

    try {
        await Create.save();
        return res.json(Create);
    } catch (err) {
        return res.status(400).json({ msg: `Error while creating Categories: ${err}` });
    }
}

// Get Categories
async function get_Categories(req, res) {
    let data = await model.Categories.find({});
    let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color }));
    return res.json(filter);
}

// Create Transaction
async function create_Transaction(req, res) {
    if (!req.body) return res.status(400).json({ msg: 'Data not been provided' });
    let { name, type, amount } = req.body;

    const create = await new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
    });

    try {
        await create.save();
        return res.status(201).json(create);
    } catch (err) {
        return res.status(400).json({ msg: `Error while creating transaction: ${err}` });
    }
}

// Get Transactions
async function get_Transaction(req, res) {
    let data = await model.Transaction.find({});
    return res.json(data);
}

// delete Transaction
async function delete_Transaction(req, res) {
    if (!req.body) return res.status(400).json({ msg: 'Request Body Not Found' });

    try {
        const result = await model.Transaction.deleteOne(req.body);
        if (result.deletedCount > 0) {
            return res.json("Record Deleted Successfully");
        } else {
            return res.json("No matching record found for deletion");
        }
    } catch (err) {
        return res.status(500).json({ msg: `Error while deleting Transaction Record: ${err}` });
    }
}


// get labels
async function get_Labels(req, res){

    model.Transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}

module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
}