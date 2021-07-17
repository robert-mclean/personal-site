const mongoose = require('mongoose');
const connection = "mongodb+srv://robertmclean:NXQ4nTRzD3NMfLK@cluster0.brtqw.mongodb.net/personalSiteData?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

