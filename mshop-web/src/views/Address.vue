<template>
  <div>
    <van-nav-bar fixed title="收货地址" left-arrow></van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"     
      add-button-text="新增收货地址"
      @add="$router.push('/addressadd')"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      chosenAddressId: '1',
      list: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/user/${this.user.id}`);
      res.data.address.forEach(item => {
          let ads = {}
          ads.id = item._id
          ads.name = item.name
          ads.tel = item.tel
          ads.address = item.province+item.city+item.county+item.addressDetail
          this.list.push(ads)
      });
      this.chosenAddressId = res.data.address[0]._id
    },
    onEdit(item, index) {
      console.log(item + index);
    }
  },
  computed: {
      user() {
          return this.$store.state.user
      }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss" scoped>
.van-address-list{
    margin-top: 45px;
}
</style>