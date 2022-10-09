const getIcons = document.querySelectorAll('.btn');
const btn_add = document.querySelector('.btn_add-expense');
const UIHome = document.querySelector('.container_2');
const UIAdd = document.querySelector('.container_4');
const UIProfile = document.querySelector('.container_3');
const list_Ui = document.querySelectorAll('.wrapper');
const exitBtnAdd = document.querySelector('.exit_add');
const changeExpenseBtn = document.querySelector('.change_style-expense');
const numberShow = document.querySelector('.input_number');
const selectExpense = document.querySelector('.select_category');
const closeSelectExpense = document.querySelector('.bar_single');
const listItemExpenses = document.querySelectorAll('.item_expense');
const calendar = document.querySelector('.show_calendar');
const icon_cal_btn = document.querySelector('.icon_cal');
const prev_profile = document.querySelector('.prev_profile');
const btn_edit = document.querySelector('.icon_edit');
const listUiOfProfile = document.querySelectorAll('.container_3>div');
const prev_edit_profile = document.querySelector('.prev_edit_profile');
function HandelChangeBtn() {
  getIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      for (let i = 0; i < getIcons.length; i++) {
        if (getIcons[i].classList.contains('active')) {
          getIcons[i].classList.remove('active');
        }
      }
      icon.classList.add("active");
      changeUI(index);
    })
  });
}
function changeUI(index) {
  let Is_clicked = false;
  for (let i = 0; i < list_Ui.length; i++) {
    if (list_Ui[i].classList.contains('active')) {
      list_Ui[i].addEventListener("click", () => {
        Is_clicked = true;
      })
      if (!Is_clicked) {
        list_Ui[i].classList.remove('active');
        list_Ui[index].classList.add('active');
      }
    }
  }
}
function HandelUiAdd() {
  btn_add.addEventListener("click", () => {
    list_Ui.forEach((Ui_item, index) => {
      if (Ui_item.classList.contains('active')) {
        Ui_item.classList.remove('active');
      }
    })
    UIAdd.classList.add('active');
  })
  //exit UI add
  exitBtnAdd.addEventListener("click", () => {
    UIAdd.classList.remove('active');
    UIHome.classList.add('active');
  });
}
function HandelChangeExpense() {
  changeExpenseBtn.addEventListener("click", () => {
    numberShow.style.display = 'none';
    selectExpense.style.display = 'flex';
  })
  //close select expense
  closeSelectExpense.onclick = () => {
    numberShow.style.display = 'grid';
    selectExpense.style.display = 'none';
  }
  listItemExpenses.forEach((item) => {
    item.addEventListener("click", () => {
      numberShow.style.display = 'grid';
      selectExpense.style.display = 'none';
    })
  })
}
// function closeCalendar() {
//   icon_cal_btn.addEventListener("click", () => {
//     if (calendar.classList.contains('active')) {
//       calendar.classList.remove('active');
//     }
//   })
// }
function HandelSelectCalendar() {
  icon_cal_btn.addEventListener("click", () => {
    if (calendar.classList.contains('active')) {
      calendar.classList.remove('active');
    } else {
      calendar.classList.add('active');
    }
  })
}
function HandelUiProfile() {
  //prev home Ui
  prev_profile.addEventListener("click", () => {
    getIcons.forEach((icon, index) => {
      if (icon.classList.contains('active')) {
        icon.classList.remove('active');
      }
    })
    list_Ui.forEach((ui, index) => {
      if (ui.classList.contains('active')) {
        ui.classList.remove('active');
      }
    })
    getIcons[1].classList.add('active');
    list_Ui[1].classList.add('active');
  })
  //xử lý chỉnh sửa profile
  btn_edit.addEventListener('click', () => {
    for (let i = 0; i < listUiOfProfile.length; i++) {
      if (listUiOfProfile[i].classList.contains('active')) {
        listUiOfProfile[i].classList.remove('active');
      }
    }
    listUiOfProfile[1].classList.add('active');
  })
  prev_edit_profile.addEventListener('click', () => {
    for (let i = 0; i < listUiOfProfile.length; i++) {
      if (listUiOfProfile[i].classList.contains('active')) {
        listUiOfProfile[i].classList.remove('active');
      }
    }
    listUiOfProfile[0].classList.add('active');
  })
}
function start() {
  // thay đổi UI
  HandelChangeBtn();
  // nút add
  HandelUiAdd();
  //nút change expense
  HandelChangeExpense();
  //select calendar
  HandelSelectCalendar();
  //xử lý ui profile
  HandelUiProfile();
}
start();