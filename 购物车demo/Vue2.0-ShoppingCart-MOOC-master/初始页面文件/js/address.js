new Vue({
    el: '#address',
    data: {
        addressList: [],
        limiteNum: 3,
        currentIndex: 0,
        shoppingMethod: 1,

    },
    computed: {
        filterAddressList() {
            return this.addressList.slice(0, this.limiteNum)
        }
    },
    mounted() {
        this.getAddressList();
    },
    methods: {
        getAddressList() {
            axios.get('./data/address.json')
                .then(res => {
                    this.addressList = res.data.result;
                })
        },
        loadMore() {
            this.limiteNum = this.addressList.length;
        },
        setDefault(addressID) {
            this.addressList.forEach((item, index) => {
                if (item.addressId == addressID) {
                    item.isDefault = true;
                } else {
                    item.isDefault = false;
                }
            })
        }
    }
})