$(function(){
  function draw(){
    var w = Number($("#grid_width").val());
    var h = Number($("#grid_height").val());
    var aw = Number($("#width").val());
    var ah = Number($("#height").val());
    $("#canvas").attr("width",aw%w == 0 ? aw : aw + w)
    $("#canvas").attr("height",ah%h == 0 ? ah : ah + h)
    alert(Math.ceil(ah/h));
    var ctx = $("#canvas")[0].getContext("2d");
    ctx.strokeStyle = "black";
    for(var i = 0; i < Math.ceil(ah/h);i++){
      for(var j = 0; j < Math.ceil(aw/w);j++){
          ctx.strokeRect(j*w,i*h,w,h);
      }
    }
  }
  $("#create_grid_btn").on("click",draw);
  $("#wh").on("keyup",function(){
    var val = $("#wh").val();
    $("#width").val(val);
    $("#height").val(val);
  });
  $("#grid_wh").on("keyup",function(){
    var val = $("#grid_wh").val();
    $("#grid_width").val(val);
    $("#grid_height").val(val);
  });

});
