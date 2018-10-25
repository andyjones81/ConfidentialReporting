const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
    req.session.destroy
    res.redirect('index')
})

router.get('/version2/user/index', function (req, res) {
    req.session.destroy
    res.render('version2/user/index')
})

router.post('/version2/user/page1', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version2/user/check')
    } else {
        res.redirect('/version2/user/page2')
    }

});
router.post('/version2/user/page2', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version2/user/check')
    } else {
        res.redirect('/version2/user/page3')
    }

});

router.post('/version2/user/page3', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version2/user/check')
    } else {
        res.redirect('/version2/user/page4')
    }

});
router.post('/version2/user/page3a', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version2/user/check')
    } else {
        res.redirect('/version2/user/page3b')
    }

});

router.post('/version2/user/page3b', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version2/user/check')
    } else {
        res.redirect('/version2/user/page4')
    }

});

router.post('/version2/user/page4', function (req, res) { 
        res.redirect('/version2/user/check')   
});

router.get('/version2/user/check', function (req, res) {
    req.session.data['cya'] = 1
    res.render('version2/user/check')
});

router.post('/version2/user/check', function (req, res) {
    res.redirect('/version2/user/complete')
});


router.get('/admin/dashboard', (req, res) => {
    var data = require('./data/data.json')
   
    res.render('admin/dashboard', {
      data
    })
  })

  router.get('/admin/assigned-me', (req, res) => {
      var data = require('./data/data.json')
     
      res.render('admin/assigned-me', {
        data
      })
    })

    router.get('/admin/in-progress', (req, res) => {
        var data = require('./data/data.json')
       
        res.render('admin/in-progress', {
          data
        })
      })

      router.get('/admin/complete', (req, res) => {
          var data = require('./data/data.json')
         
          res.render('admin/complete', {
            data
          })
        })

module.exports = router