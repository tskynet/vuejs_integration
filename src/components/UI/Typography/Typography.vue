<template>
  <div id="typography">
    <div class="content">

      <div class="header">
        <h4>Paper Dashboard Headings</h4>
        <span>Created using <a href="https://www.google.com/fonts/specimen/Muli" target="_blank">Muli</a> Font Family</span>
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
              Muted Text
            </p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>

        <div class="column">
          <p>
            <p class="title">
              Coloured Text
            </p>
            <p class="text-primary margin-bot">
              Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
            </p>
            <p class="text-info margin-bot">
              Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
            </p>
            <p class="text-success margin-bot">
              Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
            </p>
            <p class="text-warning margin-bot">
              Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
            </p>
            <p class="text-danger margin-bot">
              Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
            </p>
          </p>
        </div>

        <div class="column">
          <h2 class="text-muted">
            <p class="title">
              Small Tag
            </p>
            Header with small subtitle
            <br>
            <small>".small" is a tag for the headers</small>
          </h2>
        </div>

        <div class="column">
          <p class="title">
            Lists
          </p>
          <b-row>

            <b-col md="3">
              <h5>
                Unordered List
              </h5>
              <ul>
                <li>List Item</li>
                <li>List Item</li>
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
                <li>List Item</li>
              </ul>
            </b-col>

            <b-col md="3">
              <h5>
                Ordered List
              </h5>
              <ol>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ol>
            </b-col>

            <b-col md="3">
              <h5>
                Unstyled list
              </h5>
              <ul class="list-unstyled">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </b-col>

            <b-col md="3">
              <h5>
                Inline List
              </h5>
              <ul class="list-inline">
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </b-col>

          </b-row>
        </div>

        <div class="column">
          <p class="title">
            Blockquotes
          </p>
          <b-row>

            <b-col md="6">
              <h5>
                Default Blockquote
              </h5>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
              </blockquote>
            </b-col>

            <b-col md="6">
              <h5>
                Blockquote with Citation
              </h5>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <small>Someone famous in Source Title</small>
              </blockquote>
            </b-col>

          </b-row>
        </div>

        <div class="column">
          <p class="title">
            Code
          </p>
          <p>
            This is <code>.css-class-as-code</code>, an example of an inline code element. Wrap inline code within a <code>&lt;code&gt;...&lt;/code&gt;</code>tag.
          </p>
          <pre>1. #This is an example of preformatted text. 2. #Here is another line of code</pre>
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
#typography{
  padding:30px;
}
#typography span{
  font-size:14px;
  font-weight:400;
  color:#9A9A9A;
}
/* #typography  h1, h2, h3, h4, h5, h6{
  margin : 30px 0 15px;
} */
#typography .content{
  background:#FFFFFF;
  border-radius:6px;
  box-shadow:0 2px 2px rgba(204, 197, 185, 0.5);
}
#typography .content .header{
  padding: 25px 25px 0 20px;
}
#typography .content .content{
  padding:15px;
}
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
#typography .content .column .text-muted{
  color: rgb(37,36,34) !important;
  font-size:36.4px;
  font-weight:400px;
}
#typography .content .column .text-muted small{
  color:rgb(154,154,154);
  font-weight:300;
  font-size:22px;
}
#typography .content .content .column blockquote{
  font-style:italic;
  border-left : 5px solid #eee;
  padding : 10px 20px;
}
#typography .content .content .column blockquote small{
  display:block;
  font-style:normal;
}
#typography .content .content .column blockquote small::before{
  content:'\2014   \A0';
}
#typography .content .content .column pre{
  display:block;
  margin:0 0 0 10px;
  font-size:13px;
  line-height:1.42857143;
  color:#333;
  word-break: break-all;
  background-color:#f5f5f5;
  border:1px solid #ccc;
  border-radius:4px;
  padding:9.5px;
}
#typography .content .content .column .list-inline{
  padding-left:0;
  margin-left:-5px;
  list-style:none;
}
#typography .content .content .column .list-inline li {
  display:inline-block;
  padding-right:5px;
  padding-left:5px;
}
</style>
