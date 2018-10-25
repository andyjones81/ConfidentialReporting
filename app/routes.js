const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/user/index', function (req, res) {
    req.session.destroy
    res.render('user/index')
})

router.post('/version1/user/page1', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page2')
    }

});
router.post('/version1/user/page2', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page5')
    }

});
router.post('/version1/user/page3', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page4')
    }

});
router.post('/version1/user/page4', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page6')
    }

});
router.post('/version1/user/page5', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page3')
    }

});
router.post('/version1/user/page6', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page7')
    }

});
router.post('/version1/user/page6a', function (req, res) {
    res.redirect('/version1/user/page6b')

});
router.post('/version1/user/page6b', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page7')
    }

});
router.post('/version1/user/page7', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/version1/user/check')
    } else {
        res.redirect('/version1/user/page8')
    }

});
router.post('/version1/user/page8', function (req, res) {
    res.redirect('/version1/user/check')
});

router.get('/version1/user/check', function (req, res) {
    req.session.data['cya'] = 1
    res.render('version1/user/check')
});

router.post('/version1/user/check', function (req, res) {
    res.redirect('/version1/user/complete')
});



router.get('/version1/user/check', function (req, res) {
    req.session.data['cya'] = 1
    res.render('user/check')
});

router.post('/version1/user/retrieve', function (req, res) {
    if (req.session.data['ref'] === '973HG2ID' && req.session.data['code'] === '87F34VD2') {
        res.redirect('/version1/user/report')
    } else {
        res.redirect('/version1/user/notfound')
    }
});

router.post('/version1/user/notfound', function (req, res) {
    if (req.session.data['ref'] === '973HG2ID' && req.session.data['code'] === '87F34VD2') {
        res.redirect('/version1/user/report')
    } else {
        res.redirect('/version1/user/notfound')
    }
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