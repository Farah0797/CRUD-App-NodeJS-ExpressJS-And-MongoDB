const volSchema = require("../models/vol");

const addVol = async (req, res) => {
    try {

        const { de, destination, horaire, compagnie, prix, note, ref } = req.body
        console.log(req.body)
        if (!de || !destination || !compagnie || !prix || !note || !ref ) {
            return res.status(200).send(" Ces informations sont obligatoire")
        }
        const volfound = await volSchema.findOne({ ref })
        if (volfound) {
            return res.status(400).send("Le vol est déja enregistrer")
        }

        const newVol = new volSchema({
            de,
            destination,
            horaire,
            compagnie,
            prix,
            note,
            ref,
        })
        console.log(newVol)

        await newVol.save()
        res.status(200).send({ msg: "vol ajouter", newVol })

    } catch (error) {
        console.log(error)
        res.status(500).send("Impossible d'ajouter un vol")
    }

}

const getvol = async (req, res) => {

    try {

        const vols = await Vol.find()
        res.status(200).send({ msg: "tous les vols", vols })

    } catch (error) { res.status(500).send("Impossible de voir les vols") }
}

const updatevol = async (req, res) => {

    try {

        const { Id } = req.params

        const vol = await Vol.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        )

        res.status(200).send({ msg: "vol ajouter", vol })

    } catch (error) { res.status(500).send("Impossible de modifier les vols") }
}

const delvol = async (req, res) => {

    try {

        const { Id } = req.params
        const vol = await Vol.findByIdAndDelete(Id)
        res.status(200).send({ msg: " vol supprimer", vol })

    } catch (error) { res.status(500).send("Impossible de supprimer") }
}

module.exports = { addVol, getvol, updatevol, delvol };