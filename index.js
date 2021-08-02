const express = require('express');
const multer = require('multer');
const path = require('path');

// file upload folder 
const UPLOADS_FOLDER = './uploads';

// define the storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        // important file.pdf ==> important-file-12492439243.pdf 
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(' ')
                            .join('-') + "-" + Date.now();
        cb(null, fileName + fileExt)
    }
})

// prepare the final multer upload object
const upload = multer({
    // dest: UPLOADS_FOLDER, // now no need to call dest when we have storage
    storage: storage,
    limits: {
        fileSize: 1000000 // 1MB
    },
    fileFilter: (req, file, cb) => {
        if(file.fieldname === 'avatar') {
            if(file.mimetype === 'image/jpg' || 
                file.mimetype === 'image/png' || 
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true)
            } else {
                cb(new Error('Only jpg, png or Jpeg file allowed'), false)
            }
        } else if(file.fieldname === 'doc') {
            if(file.mimetype === 'application/pdf') {
                cb(null, true)
            } else {
                cb(new Error('Only PDF file allowed to upload in doc section'))
            }
        } else {
            cb(new Error('There was an unknown error!'))
        }
    }
});     

const app = express();

app.post('/profile', upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'doc', maxCount: 1}
]), (req, res, next) => {
    console.log(req.files.avatar)
    res.send('File Uploads');
})


// error handler 

app.use((err, req, res, next) => {
    if(err) {
        if(err instanceof multer.MulterError) {
            res.send(500).send('There was an upload error')
        } else {
            res.status(500).send(err.message)
        }
    } else {
        res.send('success')
    }
})
   
app.listen(5000, () => {
    console.log('port is running on 5000'); 
});