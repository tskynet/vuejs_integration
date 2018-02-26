<template>
  <div id="notification">
    <div class="contentNotif">
      <div class="headerNotif">
        <h4>Notifications</h4>
        <span>Custom Vue notifications plugin</span>
      </div>
      <div class="containerNotif">
        <b-row>
          <b-col md="6">
            <h5>Notifications Style</h5>
            <div class="alert alert-info">
              <span>This is a plain notification</span>
            </div>
            <div class="alert alert-info">
              <button class="close" type="button" aria-hidden="true">x</button>
              <span>This is a notification with close button.</span>
            </div>
          </b-col>
          <b-col md="6">
            <h5>Notifications states</h5>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notification',
  data: () => ({

  })
}
</script>
<style scoped>
#notification .contentNotif .headerNotif h4{
  color:rgb(37,36,34);
  font-size:21px;
  font-weight:300;
}
#notification .contentNotif .headerNotif span{
  color:rgb(154,154,154);
  font-size:14px;
  font-weight:400;
}
#notification .contentNotif .containerNotif span{
  color:rgb(48,145,178);
  font-size:14px;
  line-height:20px;
}
</style>
