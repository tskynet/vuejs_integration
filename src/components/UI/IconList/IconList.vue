<template>
  <div id="iconList">
    <div class="contentIcon">
      <div class="headerIcon">
        <h4>320+ Themify Icons</h4>
        <span>Handcrafted by our friends from <a href="https://themify.me/themify-icons" target="_blank">Themify</a></span>
      </div>
      <div class="allIcon">
        <div class="iconBlock">
          <h3>Arrows & Direction Icons</h3>
          <div class="containerIcon" v-for="icon in iconArrowDirection">
            <i :class="icon" class="iconStyle"></i>
            <span class="iconText"> {{ icon }}</span>
          </div>
          <div class="clearBoth"></div>
        </div>
        <div class="iconBlock">
          <h3>Control Icons</h3>
          <div class="containerIcon" v-for="icon in controlIcons">
            <i :class="icon" class="iconStyle"></i>
            <span class="iconText"> {{ icon }}</span>
          </div>
          <div class="clearBoth"></div>
        </div>
        <div class="iconBlock">
          <h3>Text Editor</h3>
          <div class="containerIcon" v-for="icon in textEditor">
            <i :class="icon" class="iconStyle"></i>
            <span class="iconText"> {{ icon }}</span>
          </div>
          <div class="clearBoth"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IconList',
  data: () => ({
    iconArrowDirection: ['ti-arrow-up', 'ti-arrow-right', 'ti-arrow-left', 'ti-arrow-down', 'ti-arrows-vertical', 'ti-arrows-horizontal', 'ti-angle-up', 'ti-angle-right', 'ti-angle-left', 'ti-angle-down', 'ti-angle-double-up', 'ti-angle-double-right', 'ti-angle-double-left', 'ti-angle-double-down', 'ti-move', 'ti-fullscreen', 'ti-arrow-top-right', 'ti-arrow-top-left', 'ti-arrow-circle-up',
      'ti-arrow-circle-right', 'ti-arrow-circle-left', 'ti-arrow-circle-down', 'ti-arrows-corner', 'ti-split-v', 'ti-split-v-alt', 'ti-split-h', 'ti-hand-point-up', 'ti-hand-point-right', 'ti-hand-point-left', 'ti-hand-point-down', 'ti-back-right', 'ti-back-left', 'ti-exchange-vertical'],
    textEditor: ['ti-paragraph', 'ti-uppercase', 'ti-underline', 'ti-text', 'ti-Italic', 'ti-smallcap', 'ti-list', 'ti-list-ol', 'ti-align-right', 'ti-align-left', 'ti-align-justify', 'ti-align-center', 'ti-quote-right', 'ti-quote-left'],
    controlIcons: ['ti-control-stop', 'ti-control-shuffle', 'ti-control-play', 'ti-control-pause', 'ti-control-forward', 'ti-control-backward', 'ti-volume', 'ti-control-skip-forward', 'ti-control-skip-backward', 'ti-control-record', 'ti-control-eject']
  })
}
</script>
<style scoped>
#iconList{
 padding:30px
}
#iconList .contentIcon{
  background:white;
  border-radius:6px;
  box-shadow:0 2px 2px rgba(204, 197, 185, 0.5);
}
#iconList .contentIcon .headerIcon{
  padding:20px 20px 0;
}
#iconList .contentIcon .headerIcon h4{
  color:#252422;
  font-size:21px;
  font-weight: 300;
}
#iconList .contentIcon .headerIcon span{
  font-size:14px;
  color:rgb(154,154,154);
}
#iconList .contentIcon .allIcon{
  padding:15px 15px 10px 15px
}
#iconList .contentIcon .allIcon .iconBlock{
  margin-bottom: 42px;
}
#iconList .contentIcon .allIcon .iconBlock h3{
  font-size:25px;
  color:rgb(37,36,34);
  font-weight:400;
  line-height:36px;
  margin:20px 0 10px 0;
}
#iconList .contentIcon .allIcon .iconBlock .clearBoth{
  clear:both;
}
#iconList .contentIcon .allIcon .iconBlock .containerIcon{
  font-size:14px;
  float:left;
  width:240px;
  padding: 0.7em 0;
}
#iconList .contentIcon .allIcon .iconBlock .containerIcon .iconStyle{
  margin-top:3px;
  color:black;
  transition-delay:  0;
  transition-duration:  0.3s;
  transition-property: all;
  font-weight:700;
  position:absolute;
}
#iconList .contentIcon .allIcon .iconBlock .containerIcon:hover .iconStyle{
  font-size:2.2em;
  margin-top:-5px;
}
#iconList .contentIcon .allIcon .iconBlock .containerIcon .iconText{
  font-size:0.8em;
  color:#aaa;
  margin-left:35px;
  transition: .3s;
}
#iconList .contentIcon .allIcon .iconBlock .containerIcon:hover .iconText{
  margin-left:45px;
  color:black;
}
</style>
