<template>
  <div id="typography">
    <h2>test</h2>
    <div class="content">

      <div class="header">
        <h4>Paper Dashboard Headings</h4>
        <span>Created using <a href="#">Muli</a> Font Family</span>
      </div>

      <div class="content">
        <div class="column">
          <h1>
            <p class="title">
              Header 1
            </p>
            Paper Dashboard Heading
          </h1>
        </div>

        <div class="column">
          <h2>
            <p class="title">
              Header 2
            </p>
            Paper Dashboard Heading
          </h2>
        </div>

        <div class="column">
          <h3>
            <p class="title">
              Header 3
            </p>
            Paper Dashboard Heading
          </h3>
        </div>

        <div class="column">
          <h4>
            <p class="title">
              Header 4
            </p>
            Paper Dashboard Heading
          </h4>
        </div>

        <div class="column">
          <h5>
            <p class="title">
              Header 5
            </p>
            Paper Dashboard Heading
          </h5>
        </div>

        <div class="column">
          <h6>
            <p class="title">
              Header 6
            </p>
            Paper Dashboard Heading
          </h6>
        </div>

        <div class="column">
          <p>
            <p class="title">
              Paragraph
            </p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>

        <div class="column">
          <blockquote>
            <p class="title">
              Quote
            </p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
            <small>
              Steve  Jobs, CEO Apple
            </small>
          </blockquote>
        </div>

        <div class="column">
          <p class="text-muted">
            <p class="title">
              Paragraph
            </p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'Typography',
  data: () => ({

  })
}
</script>
<style scoped>
#typography span{
  font-size:14px;
  font-weight:400;
  color:#9A9A9A;
}
/* #typography  h1, h2, h3, h4, h5, h6{
  margin : 30px 0 15px;
} */
#typography .content .content .column{
  position:relative;
  padding-left:140px;
  margin-bottom:40px;
  font-size:16px;
  color:rgb(37,36,34);
}
#typography .content .content .column h1{
  text-align:left;
}
#typography .content .content .column .title{
  position: absolute;
  transform: translateY(-50%);
  top:50%;
  left:0;
  color:rgb(154,154,154);
  font-weight:400;
  font-size:14px;
}
#typography .content .content .column blockquote small{
  display:block;
}
#typography .content .content .column blockquote small::before{
  content:'\2014   \A0';
}
</style>
