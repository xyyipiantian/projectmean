new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        curProduct: ""
    },
    methods: {
        cartView() {
            axios.get('./data/cartData.json')
                .then(res => {
                    this.productList = res.data.result.list;
                })
        },
        addQuantity(item, num) {
            if (num > 0) {
                item.productQuantity++;
            } else {
                item.productQuantity--;
            };
            this.calcTotalPrice();
        },
        selectProduct(item) {
            if (!item.checked) {
                this.$set(item, 'checked', true);
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        checkAll(val) {
            this.checkAllFlag = val;
            this.productList.forEach((item, index) => {
                if (!item.checked) {
                    this.$set(item, 'checked', this.checkAllFlag)
                } else {
                    item.checked = this.checkAllFlag;
                }
            });
            this.calcTotalPrice();
        },
        calcTotalPrice() {
            this.totalMoney = 0;
            this.productList.forEach(item => {
                if (item.checked) {
                    this.totalMoney += item.productQuantity * item.productPrice;
                }
            })
        },
        delConfirm(item) {
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct() {
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
            this.curProduct = '';
        }
    },
    filters: {
        formatMoney(value) {
            return '￥' + value.toFixed(2);
        }
    },
    mounted() {
        this.cartView();
    }
})