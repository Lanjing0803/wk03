const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();


router.get('/form', async (req, res, next) => {
  res.render('comments/form', { title: 'BookedIn || Comments' },);
});

router.get('/edit', async (req, res, next) => {
  let commentIndex = req.query.id;
  let comment = Comment.get(commentIndex);
  console.log("comment: ", comment);
  res.render('comments/form', { title: 'BookedIn || Comments', comment: comment, commentIndex: commentIndex});

});

router.post('/upsert', async (req, res, next) => {
  console.log('in comments upsert - body: ' + JSON.stringify(req.body))
  Comment.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `The comment has been ${createdOrupdated}!`,
  };
  let bookurl = `/books/show/${req.body.bookId}`;
  console.log('my book url for return is:', bookurl);
  res.redirect(303, bookurl);

});

module.exports = router;