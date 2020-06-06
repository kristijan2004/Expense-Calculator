let budgetBtn = document.querySelector("#budget-submit");
let budgetInput = document.querySelector("#budget-input");
let budgetAmount = document.querySelector("#budget-amount");
let expenseAmount = document.querySelector("#expense-amount");
let balanceAmount = document.querySelector("#balance-amount");
let budgetForm = document.querySelector("#budget-form");
let budgetFeedback = document.querySelector(".budget-feedback");
let balanceDiv = document.querySelector(".balance");

let expenseInput = document.querySelector("#expense-input");
let expenseAmount1 = document.querySelector("#amount-input");
let expenseBtn = document.querySelector("#expense-submit");
let expenseForm = document.querySelector("#expense-form");
let expenseFeedback = document.querySelector(".expense-feedback");

let tableDiv = document.querySelector("#tableDiv");

let expenses = [];

class Expense {
  constructor(_title, _amount) {
    this.title = _title;
    this.amount = _amount;
  }
}
function balanceCheck() {
  balanceAmount.innerHTML = "";
  balanceAmount.innerHTML = budgetAmount.innerHTML - expenseAmount.innerHTML;
}
function balanceInfo() {
  if (balanceAmount.innerHTML < 0) {
    balanceDiv.classList.add("showRed");
    balanceDiv.classList.remove("showGreen");
  } else if (balanceAmount.innerHTML > 0) {
    balanceDiv.classList.add("showGreen");
    balanceDiv.classList.remove("showRed");
    balanceDiv.classList.remove("showBlack");
  } else {
    balanceDiv.classList.add("showBlack");
  }
}
budgetForm.addEventListener("submit", function (e) {
  if (budgetInput.value === "") {
    budgetFeedback.style.display = "block";
  } else {
    budgetAmount.innerHTML = budgetInput.value;
    balanceAmount.innerHTML = budgetInput.value;
  }
  balanceCheck();
  balanceInfo();
  e.preventDefault();
  budgetInput.value = "";
});

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();
  balanceAmount.innerHTML =
    parseInt(balanceAmount.innerHTML) - expenseAmount1.value;
  expenseAmount.innerHTML =
    parseInt(expenseAmount.innerHTML) + parseInt(expenseAmount1.value);

  let table = document.querySelector("table");
  if (expenseInput.value === "" || expenseAmount1.value === undefined) {
    expenseFeedback.style.display = "block";
  } else {
    if (!table) {
      let table = document.createElement("table");
      table.setAttribute("id", "table");
      tableDiv.appendChild(table);
      let tr = table.insertRow();
      tr.style.fontWeight = "bold";
      let td = tr.insertCell();
      td.innerHTML = "Expense Title";
      let td1 = tr.insertCell();
      td1.innerHTML = "Expense Amount";
      let td2 = tr.insertCell();
      let tr1 = table.insertRow();
      let td3 = tr1.insertCell();
      td3.innerHTML = expenseInput.value;
      let td4 = tr1.insertCell();
      td4.innerHTML = expenseAmount1.value;
      let newEx = new Expense(expenseInput.value, expenseAmount1.value);
      expenses.push(newEx);
      expenseInput.value = "";
      expenseAmount1.value = "";
      let td5 = tr1.insertCell();
      let editBtn = document.createElement("button");
      editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
      editBtn.classList.add("noBorder");
      td5.appendChild(editBtn);
      let td6 = tr1.insertCell();
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      deleteBtn.classList.add("noBorder");
      td6.appendChild(deleteBtn);
      editBtn.addEventListener("click", function (e) {
        let index = expenses.indexOf(newEx);
        expenseInput.value = newEx.title;
        expenseAmount1.value = newEx.amount;
        e.currentTarget.parentElement.parentElement.remove();
        expenses.splice(index, 1);
        expenseAmount.innerText =
          parseInt(expenseAmount.innerText) - parseInt(expenseAmount1.value);
        // balanceAmount.innerText = parseInt(balanceAmount.innerText) + parseInt(expenseAmount1.value)
        balanceCheck();
        balanceInfo();
      });
      deleteBtn.addEventListener("click", function (e) {
        let index = expenses.indexOf(newEx);
        e.currentTarget.parentElement.parentElement.remove();
        expenses.splice(index, 1);
        expenseAmount.innerText =
          parseInt(expenseAmount.innerText) - parseInt(newEx.amount);
        // balanceAmount.innerText = parseInt(balanceAmount.innerText) + parseInt(newEx.amount)
        balanceCheck();
        balanceInfo();
      });
      balanceInfo();
    } else {
      let tr1 = table.insertRow();
      let td3 = tr1.insertCell();
      td3.innerHTML = expenseInput.value;
      let td4 = tr1.insertCell();
      td4.innerHTML = expenseAmount1.value;
      let newEx = new Expense(expenseInput.value, expenseAmount1.value);
      expenses.push(newEx);
      expenseInput.value = "";
      expenseAmount1.value = "";
      let td5 = tr1.insertCell();
      let editBtn = document.createElement("button");
      editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
      editBtn.classList.add("noBorder");
      td5.appendChild(editBtn);
      let td6 = tr1.insertCell();
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      deleteBtn.classList.add("noBorder");
      td6.appendChild(deleteBtn);
      editBtn.addEventListener("click", function (e) {
        let index = expenses.indexOf(newEx);
        expenseInput.value = newEx.title;
        expenseAmount1.value = newEx.amount;
        e.currentTarget.parentElement.parentElement.remove();
        expenses.splice(index, 1);
        expenseAmount.innerText =
          parseInt(expenseAmount.innerText) - parseInt(expenseAmount1.value);
        // balanceAmount.innerText = parseInt(balanceAmount.innerText) + parseInt(expenseAmount1.value)
        balanceCheck();
        balanceInfo();
      });
      deleteBtn.addEventListener("click", function (e) {
        let index = expenses.indexOf(newEx);
        e.currentTarget.parentElement.parentElement.remove();
        expenses.splice(index, 1);
        expenseAmount.innerText =
          parseInt(expenseAmount.innerText) - parseInt(newEx.amount);
        // balanceAmount.innerText = parseInt(balanceAmount.innerText) + parseInt(newEx.amount)
        balanceCheck();
        balanceInfo();
      });
      balanceCheck();
      balanceInfo();
    }
  }
});
