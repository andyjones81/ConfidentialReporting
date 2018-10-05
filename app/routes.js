const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/user/index', function (req, res) {
    req.session.clear
    res.render('user/index')
})

router.post('/user/page1', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page2')
    }

});
router.post('/user/page2', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page3')
    }

});
router.post('/user/page3', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page4')
    }

});
router.post('/user/page4', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page5')
    }

});
router.post('/user/page5', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page6')
    }

});
router.post('/user/page6', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page7')
    }

});
router.post('/user/page6a', function (req, res) {
    res.redirect('/user/page6b')

});
router.post('/user/page6b', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page7')
    }

});
router.post('/user/page7', function (req, res) {
    if (req.session.data['cya'] === 1) {
        res.redirect('/user/check')
    } else {
        res.redirect('/user/page8')
    }

});
router.post('/user/page8', function (req, res) {
    res.redirect('/user/check')
});

router.get('/user/check', function (req, res) {
    req.session.data['cya'] = 1
    res.render('user/check')
});

router.post('/user/check', function (req, res) {
    res.redirect('/user/complete')
});



router.get('/user/check', function (req, res) {
    req.session.data['cya'] = 1
    res.render('user/check')
});

router.post('/user/retrieve', function (req, res) {
    if (req.session.data['ref'] === '973HG2ID' && req.session.data['code'] === '87F34VD2') {
        res.redirect('/user/report')
    } else {
        res.redirect('/user/notfound')
    }
});

router.post('/user/notfound', function (req, res) {
    if (req.session.data['ref'] === '973HG2ID' && req.session.data['code'] === '87F34VD2') {
        res.redirect('/user/report')
    } else {
        res.redirect('/user/notfound')
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