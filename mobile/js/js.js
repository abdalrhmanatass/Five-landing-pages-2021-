$().ready(function () {
  // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow للعمل
  // تلغى التأثيرات فقط فى النسخة اقل من 4 فى مقاس الجوال
  var wow = new WOW({
    mobile: false,
  });
  wow.init();

  $(function () {
    $("#emailForm").validate();
  });
});
