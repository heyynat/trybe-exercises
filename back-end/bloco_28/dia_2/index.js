const fs = require('fs');
const express = require('express');
const app = express();
const multer = require('multer');

const PORT = 3001;

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
destination: (req, file, callback) => {
  callback(null, 'uploads');
},
filename: (req, file, callback) => {
  callback(null, Date.now()+'-'+file.originalname);
}});

const upload = multer({ storage });

const fileFilter = (req, file, cb) => {
  
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    
    return cb(null, false);
  }
  
  if (fileExists(file.originalname)) {
    req.fileDuplicated = true;
    
    return cb(null, false);
  }
}

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);
  
  return files.some(file => file === fileName);
}

app.post('/upload', fileFilter, upload.single('file'), (req, res) => {
  if (req.fileValidationError) {
    return res.status(403).json({error: { mesage: "Extension must be `png`" }});
  }
  if (req.fileDuplicated) {
    return res.status(409).send({ error: { mesage: "File already exists" } })
  }
  return res.send();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});