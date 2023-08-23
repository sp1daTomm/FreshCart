
const btn0 = document.querySelector('.chev');
btn0.addEventListener('click', () => {
  btn0.classList.toggle('rotate');
});

const btns = document.querySelectorAll('.chev1');
btns.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('rotate');
  });
});

// const btns = document.querySelectorAll('.chev1');
//   btns.forEach((item) => {
//     item.addEventListener('click', () => {
//       item.classList.toggle('rotate');
//     });
//   });


  // $(document).ready(function () {
  //   var selectAllCheckBox = $(".checkAll");
  // });

  // selectAllCheckBox.on("change", function () {
  //   var isChecked = $(this).prop("checked");

  //   var checkedboxes = $("input[type='checkbox']").not(this);

  //   checkedboxes.prop("checked", isChecked);

  // });

