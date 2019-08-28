<template>
  <div>
    <van-nav-bar fixed title="添加收货地址" left-arrow></van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from "../plugins/area.js";

export default {
  data() {
    return {
      areaList
    };
  },
  computed: {
      user() {
          return this.$store.state.user 
      }
  },
  methods: {
    async onSave(content) {
      const res = await this.$http.put(`/addressadd/${this.user.id}`,content)
    },
    onDelete() {
      Toast("delete");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-address-edit {
  margin-top: 45px;
}
</style>