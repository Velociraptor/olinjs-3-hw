$(function () {
  $('#formit').on('submit', function () {
    $.post("/order/create", $('#formit').serialize());
    return false;
  })
})