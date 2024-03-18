const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Book = require('../models/book');


router.get('/form', async (req, res, next) => {
  res.render('comments/form', { title: 'BookedIn || Authors' });
});

router.get('/edit', async (req, res, next) => {
  let commentIndex = req.query.id;
  let comment = Comment.get(commentIndex);
  res.render('comments/form', { title: 'BookedIn || Comments', comment: comment, commentIndex: commentIndex });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  let commentIndex = req.body.id;
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `The comment has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books'); 
});

module.exports = router;
