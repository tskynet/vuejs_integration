<template>
  <div id="teamMemberList">
    <h4>Team members</h4>
    <MemberList v-bind:status="statu[0]" v-bind:textStatus="textStatu[0]" v-bind:name="nameUser[0]" v-bind:img="imgSrc[0]"></MemberList>
    <MemberList v-bind:status="statu[1]" v-bind:textStatus="textStatu[1]" v-bind:name="nameUser[1]" v-bind:img="imgSrc[1]"></MemberList>
    <MemberList v-bind:status="statu[2]" v-bind:textStatus="textStatu[2]" v-bind:name="nameUser[2]" v-bind:img="imgSrc[2]"></MemberList>
  </div>
</template>
<script>
import MemberList from '@/components/UI/UserProfile/MemberList'
export default {
  name: 'TeamMemberList',
  components: {
    MemberList
  },
  data: () => ({
    statu: ['statusOffline', 'statusBusy', 'statusOnline'],
    textStatu: ['Offline', 'Busy', 'Online'],
    nameUser: ['Dj Khaled', 'John Deep', 'Tesla'],
    imgSrc: ['static/img/member.jpg', 'static/img/member.jpg', 'static/img/member.jpg']
  })
}
</script>
<style scoped>
#teamMemberList{
  padding: 15px 15px 10px 15px;
  background:white;
  border-radius:6px;
  box-shadow:0 2px 2px rgba(204, 197, 185, 0.5);
}
</style>
