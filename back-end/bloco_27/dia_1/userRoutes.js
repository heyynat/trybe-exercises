const router = require('express').Router();

router.post('/', verifyPassword, validateEmail, async (req, res) => {
    
    try {
        const { firstName, lastName, email, password } = req.body
        const data = await insertcharacter(name, cartoon)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Problema ao inserir o registro' })
    }
    
})

module.exports = router;