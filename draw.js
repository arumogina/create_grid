$(function(){
  function draw(){
    var w = Number($("#grid_width").val());
    var h = Number($("#grid_height").val());
    var aw = Number($("#width").val());
    var ah = Number($("#height").val());
    var cw = aw%w == 0 ? aw : aw + w
    var ch = ah%h == 0 ? ah : ah + h
    var char_size = 20;
    cw += char_size;
    ch += char_size;
    $("#canvas").attr("width",cw)
    $("#canvas").attr("height",ch)
    var ctx = $("#canvas")[0].getContext("2d");
    ctx.strokeStyle = "black";
    for(var i = 0; i < Math.ceil(ah/h);i++){
      ctx.fillText(String(i+1),0,char_size+h*i);
      for(var j = 0; j < Math.ceil(aw/w);j++){
        if(i==0) ctx.fillText(String(j+1),char_size+w*j,10);
        ctx.strokeRect(char_size+(j*w),char_size+(i*h),w,h);
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
