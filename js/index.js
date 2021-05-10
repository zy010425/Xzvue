//只要jquery代码都加
$(function(){ 
  $.ajax({
    url:"http://xzserver.applinzi.com/index",
    type:"get",
    dataType:"json",
    success:function(result){
      console.log(`index.js中获得的数据:`)
      console.log(result);
      //将result中第一个商品的数据，填入第一个商品的HTML片段中，再将html片段填充回id为p1的元素内
      //先取出result中第一个商品对象
      var p1=result[0];
      //定义模板字符串html,保存第一个商品的HTML片段，并用p1的属性填充HTML片段中的内容
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-2">${p1.title}</h5>
          <h6 class="mb-5">
            <a class="text-dark" href="javascript:;">${p1.details}</a>
          </h6>
          <span class="text-primary">¥${p1.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p1.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
      </div>`;
      //最后将HTML片段填充回id为p1的内容中
      $("#p1").html(html);

      /*填充第二个商品*/
      //先从result中取出第二个商品对象
      var p2=result[1];
      //再定义第二个商品的HTML片段，内部填充上第二个商品的属性值
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-2">${p2.title}</h5>
          <h6 class="mb-5">
            <a class="text-dark" href="javascript:;">${p2.details}</a>
          </h6>
          <span class="text-primary">¥${p2.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p2.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p2.pic}" data-holder-rendered="true">
      </div>`
      //将填充好的HTML片段填充到页面中id为p2的元素内容中
      $("#p2").html(html);

      /*加载第三个商品*/
      //先从result中获取第三个商品对象
      var p3=result[2];
      //定义第三个商品的html片段，填充上第三个商品对象的属性值
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-3">${p3.title}</h5>
          <span class="text-primary">¥${p3.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p3.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p3.pic}" data-holder-rendered="true">
      </div>`
      //将html片段填充回id为p3的元素内容中
      $("#p3").html(html);

      /*动态添加后三个商品*/
      //先截取出result中后三个商品，组成子数组
      var others=result.slice(-3);
      //先定义一个HTML变量准备累加三个商品的HTML片段
      var html="";
      //再遍历后三个商品
      for(var p of others){
        //每遍历一个商品，就想HTML片段中添加一个商品的HTML片段，并填充当前商品的属性值
        html+=`<div class="col-md-4 p-0 pl-2">
          <div class="card border-0 text-center">
            <img class="card-img-top" src="${p.pic}" alt="Card image cap">
            <div class="card-body p-0 pr-1 pl-1">
              <span class="d-inline-block">${p.title}</span>
              <span class="text-primary small">¥${p.price.toFixed(2)}</span>
              <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
            </div>
          </div>
        </div>`
      }//(遍历结束)
      //将拼好的三个商品的三段HTML填充到id为others的元素内容中
      $("#others").html(html);
    }
  })
})