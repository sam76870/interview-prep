const inputBox = document.getElementById("debouncer");

function debounce(callback, delay) {
  let timerId;
  
  return function (event) {
      clearTimeout(timerId);

    timerId = setTimeout(function () {
      callback(event);
    }, delay);
  };
}

function showValue(event) {
  console.log("Final value:", event.target.value);
}

const debouncedInputHandler = debounce(showValue, 500);

inputBox.addEventListener("input", debouncedInputHandler);
