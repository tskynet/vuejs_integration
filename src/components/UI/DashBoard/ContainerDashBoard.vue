<template>
  <div id="containerDashBoard">
    <div class="content">
      <ContainerCard></ContainerCard>
      <UserBehavior></UserBehavior>
    </div>
  </div>
</template>
<script>
import ContainerCard from '@/components/UI/DashBoard/ContainerCard'
import UserBehavior from '@/components/UI/DashBoard/UserBehavior'
export default {
  name: 'ContainerDashBoard',
  components: {
    ContainerCard,
    UserBehavior
  },
  data: () => ({

  })
}
</script>
<style scoped>
#containerDashBoard .content{
  padding : 30px 15px 30px 15px;
}
</style>
