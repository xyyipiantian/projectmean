
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Profile = require('../../models/Profile')

//@route GET api/profiles/test
//@desc  返回的请求的json
//@access  public

router.get('/test',(req,res)=>{
    res.json({msg:'profile success'})
})

//@route POST api/profiles/add
//@desc  添加信息内容
//@access  public
router.post('/add', passport.authenticate('jwt', { session: false }),(req,res)=>{
    const profileFields = {};

    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.describe) profileFields.decsribe = req.body.describe;
    if(req.body.income) profileFields.income = req.body.income;
    if(req.body.expend) profileFields.expend = req.body.expend;
    if(req.body.cash) profileFields.cash = req.body.cash;
    if(req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save().then(profile=>{
        res.json(profile);
    })

});

//@route GET api/profiles
//@desc  获取所有信息
//@access  Private

router.get('/',passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.find()
        .then(profile =>{
            if(!profile){{
                return res.statusMessage(404).json('没有任何信息');
            }}

            res.json(profile);
        })
        .catch(err =>res.statusMessage(404).json(err));
})

//@route GET api/profiles
//@desc  获取单个信息
//@access  Private

router.get('/:id',passport.authenticate('jwt', { session: false }),(req,res)=>{
    Profile.findOne({_id:req.param.id})
        .then(profile =>{
            if(!profile){{
                return res.statusMessage(404).json('没有任何信息');
            }}

            res.json(profile);
        })
        .catch(err =>res.statusMessage(404).json(err));
})

//@route POST api/profiles/edit
//@desc  编辑信息窗口
//@access  Private
router.post('/edit', passport.authenticate('jwt', { session: false }),(req,res)=>{
    const profileFields = {};

    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.describe) profileFields.decsribe = req.body.describe;
    if(req.body.income) profileFields.income = req.body.income;
    if(req.body.expend) profileFields.expend = req.body.expend;
    if(req.body.cash) profileFields.cash = req.body.cash;
    if(req.body.remark) profileFields.remark = req.body.remark;

    Profile.findOneAndUpdate(
        {_id:req.params.id},
        {$set:profileFields},
    ).then(profile => res.json(profile))

});

//@route POST api/profiles/
//@desc  删除信息接口
//@access  Private
router.delete(
    'delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req,res) => {
        Profile.findOneAndRemove({_id:req.params.id}).then(profile=>{
            profile.save().then(profile =>res.json(profile));
        })
        .catch(err => res.status(404).json('删除失败'))
    }
)

module.exports = router;

