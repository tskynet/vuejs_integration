<template>
  <div id="memberList">
    <b-row>
      <b-col sm="3">
        <div class="image">
          <img class="avatar" src="static/img/member.jpg" alt="test" />
        </div>
      </b-col>
      <b-col sm="6">
        <span class="pseudo">{{ name }}</span>
        <span :class="status">{{ textStatus }}</span>
      </b-col>
      <b-col sm="3">
        <div class="contact">
          <button class="btn btn-sm btn-success btn-icon">
            <i class="ti-email"></i>
          </button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'MemberList',
  props: ['status', 'textStatus', 'name'],
  data: () => ({

  })
}
</script>
<style scoped>
#memberList .image{
  width:50px;
  height:50px;
  overflow:hidden;
  border-radius:50%;
}
#memberList .image .avatar{
  display:block;
  max-width:100%;
  height:auto;
}
#memberList .pseudo{
  display:block;
  font-size:16px;
}
#memberList .statusOffline{
  font-size:12px;
  color:rgb(221,221,211);
}
#memberList .statusBusy{
  font-size:12px;
  color:rgb(179,60,18);
}
#memberList .statusOnline{
  font-size:12px;
  color:rgb(34,152,99);
}
#memberList .contact{
  text-align:right;
}
#memberList .contact .btn{
  border-radius:50%;
  color:#41B883;
  border: 2px solid #41B883;
  background-color:transparent;
  padding:7px;
}
#memberList .contact .ti-email{
  text-align:center;
  font-size:14px;
  width:21px;
  display:inline-block;
}
</style>
