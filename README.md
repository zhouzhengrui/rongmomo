# Readme

[更新记录](#update) / [所用插件](#plugin) / [相关备注](#relevant) / [已完成页面](#pages)

## GitHub Pages

<https://zhouzhengrui.github.io/rongmomo/>

<https://zhouzhengrui.github.io/rongmomo/7-new.html> 新增内容预览

## Update

### 2017-3-30

- `2-package-payment-finish.html` 增加红包弹窗, js/modalEffects/modalEffects.js 有修改需替换
- js/jquery.area.js 原为全局引用, 现在改为需要地区选择的页面引用, 否则会报错

### 2017-3-22

- 添加 `7-address.html`

### 2017-3-16

- `3-order-all.html` 取消订单按钮添加下拉选择功能
- `5-setting-edit.html` 所在城市按钮添加地区选择功能, 需引入js/jquery.area.js, 替换css

### 2017-3-13

- 新增弹出框页面, 4个文本页, 3个转发红包页
- 替换css
- 发现一个星级评分的图片显示问题, 已修改, 需替换script.js
- img文件夹增加两张图片

### 2017-2-27

- `4-user.html`图片列表添加滑动功能, html有少量修改, 替换css, 替换scripts.js

### 2016-12-28

- 完成[5-设置]
- 完成[6-预约]

### 2016-12-27

- 完成[4-个人中心]

### 2016-12-26

- 完成[3-订单]

### 2016-12-25

- 上传部分页面

### 2016-12-24

- 完成[2-购物]

### 2016-12-23

- 完善商品详情页
- 用了部分时间测试插件, 测试手机效果并调整
- 用了大量时间对结构和元素进行调整, 主要调整header/list/button, 为了让之后的页面可以更好的复用和维护

### 2016-12-22

- 完成[1-首页]

### 2016-12-20

- 新建项目, 上传已完成页面

[⬆ back to top](#readme)

## Plugin

- [jQuery - 1.9.1](http://jquery.com/)
- [开关 - switchery](http://abpetkov.github.io/switchery/)
- [滑动(tab/slide) - swiper 3.3.1](http://idangero.us/swiper/)
- [图片延迟加载 - lazyload 1.9.3](http://www.appelsiini.net/projects/lazyload)
- [抛物线 - fly 1.0.0](https://github.com/amibug/fly)
- [模态窗口 - ModalWindowEffects 1.0.0](https://github.com/codrops/ModalWindowEffects)
- [单选复选框 - iCheck 1.0.2](http://www.bootcss.com/p/icheck/)
- [星级评分 - raty 2.7.0](http://wbotelhos.com/raty)

[⬆ back to top](#readme)

## Relevant

- 广告页图片 `375*667px`
- 介绍页图片 `350*350px`
- 首页slideshow `375*200px`
- 首页商品图片 `345*200px`
- 首页技师列表图片 `65*65px`
- 商品详情页大图 `375*256px`
- 商品详情页滑动小图 `120*120px`
- 订单页小图 `40*40px`

[⬆ back to top](#readme)

## Pages

- 登录 `index.html`
- 免密登录 `1-password-unwanted.html`
- 忘记密码 `1-password-forget.html`
- 重置密码 `1-password-reset.html`
- 广告 `1-advertisement.html`
- 介绍 `1-introduce.html`
- 定位 `1-position.html`
- 首页-全部项目 `1-home-all.html`
- 首页-套餐 `1-home-package.html`
- 首页-我的技师 `1-home-technician.html`
- 首页-我的技师-空 `1-home-technician-empty.html`
- 首页-我的技师-技师主页 `1-home-technician-content.html`
- 首页-网络连接失败 `1-home-empty.html`
- 首页-未登录 `1-home-empty-2.html`
- 商品详情 `2-goods-content.html`
- 商品详情-评论 `2-goods-comment.html`
- 商品详情-确认商品信息 `2-goods-buy.html`
- 商品详情-确认商品信息-确认订单 `2-goods-confirm.html`
- 商品详情-确认商品信息-确认订单-订单详情 `2-goods-payment.html`
- 商品详情-确认商品信息-确认订单-订单详情-交易详情 `2-goods-payment-finish.html`
- 套餐详情 `2-package-content.html`
- 套餐详情-确认订单 `2-package-buy.html`
- 套餐详情-确认订单-订单详情 `2-package-payment.html`
- 套餐详情-确认订单-订单详情-交易详情 `2-package-payment-finish.html`
- 套餐详情-推荐人 `2-recommend.html`
- 购物车 `2-cart.html`
- 购物车-空 `2-cart-empty.html`
- 购物车-确认商品信息 `2-cart-confirm.html`
- 购物车-确认商品信息-提交订单 `2-cart-confirm-submit.html`
- 购物车-确认商品信息-优惠券 `2-cart-coupon.html`
- 订单-空 `3-order-empty.html`
- 订单-全部商品 `3-order-all.html`
- 订单-订单详情 [红包] `3-order-content.html`
- 订单-退款 `3-order-refund.html`
- 订单-退款-结果详情 `3-order-refund-finish.html`
- 订单-修改订单-修改时间 `3-order-edit-time.html`
- 订单-评价 [打赏] `3-order-comment.html`
- 订单-我的评价 `3-order-comment-content.html`
- 订单-加单 `3-order-add.html`
- 个人中心 `4-user.html`
- 个人中心-未登录 `4-user-empty.html`
- 个人中心-护理疗程 `4-user-course.html`
- 个人中心-护理疗程-空 `4-user-course-empty.html`
- 个人中心-护理疗程-内容 `4-user-course-content.html`
- 个人中心-我的钱包 `4-user-wallet.html`
- 个人中心-我的钱包-优惠券 `4-user-coupon.html`
- 个人中心-我的钱包-优惠券-历史 `4-user-coupon-history.html`
- 个人中心-我的钱包-优惠券-兑换 `4-user-coupon-exchange.html`
- 个人中心-我的钱包-会员卡 `4-user-card.html`
- 个人中心-我的钱包-会员卡-提现 `4-user-card-withdraw.html`
- 个人中心-我的钱包-会员卡-交易详情 `4-user-card-transaction.html`
- 个人中心-我的钱包-会员卡-充值详情 `4-user-card-recharge.html`
- 个人中心-我的钱包-会员卡-说明 `4-user-card-explain.html`
- 个人中心-我的钱包-会员卡-充值 `4-user-recharge.html`
- 个人中心-我的钱包-积分 `4-user-integral.html`
- 个人中心-常用地址 `4-user-address.html`
- 个人中心-常用地址-空 `4-user-address-empty.html`
- 个人中心-常用地址-新增 `4-user-address-add.html`
- 设置 `5-setting.html`
- 设置-编辑资料 `5-setting-edit.html`
- 设置-编辑资料-绑定账号 `5-setting-edit-bind.html`
- 设置-编辑资料-绑定账号-绑定新手机 `5-setting-edit-bind-phone.html`
- 设置-编辑资料-绑定账号-更换手机号 `5-setting-edit-bind-replace.html`
- 设置-编辑资料-绑定账号-验证登录密码 `5-setting-edit-bind-validate.html`
- 设置-编辑资料-密码设置 `5-setting-edit-password.html`
- 设置-编辑资料-密码修改 `5-setting-edit-password-edit.html`
- 设置-编辑资料-修改昵称 `5-setting-edit-name.html`
- 预约-选择地址- `6-reserve-address.html`
- 预约-选择技师 `6-reserve-technician.html`
- 预约-选择服务 `6-reserve-goods.html`
- 预约-选择套餐 `6-reserve-package.html`
- 预约-选择时间 `6-reserve-time.html`
- 预约-支付订单 `6-reserve-payment.html`
- 预约-完成 `6-reserve-finish.html`
- 预约-地址 `6-reserve-select-address.html`
- 预约-技师 `6-reserve-select-technician.html`
- 预约-地址-空 `6-reserve-address-empty.html`
- 新增 `7-new.html`
- 新增-弹出框样式 `7-modals.html`
- 新增-文本页-订单退改规则 `7-text-1.html`
- 新增-文本页-会员卡文案 `7-text-2.html`
- 新增-文本页-颜值积分 `7-text-3.html`
- 新增-文本页-购买须知 `7-text-4.html`
- 新增-转发红包-1 `7-transmit-1.html`
- 新增-转发红包-2 `7-transmit-2.html`
- 新增-转发红包-3 `7-transmit-3.html`
- 新增-详细地址 `7-address.html`

[⬆ back to top](#readme)
