const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');


range2.addEventListener('input', (e) => {
  const label = e.target.nextElementSibling;
  const value = +e.target.value;
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  const max = +e.target.max;
  const min = +e.target.min;
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${100 + left}px`;

  var one = '';
  var two = '';
  var three = '';

  if (value.toString().length <= 4) {
    three = value.toString();
    while (three.length != 4) {
      three = '0' + three;
    }
    one = '000';
    two = '000';
  } else if (value.toString().length <= 7) {
    three = value.toString().substring(value.toString().length-4, value.toString().length);
    two = value.toString().substring(0, value.toString().length-4);
    while (two.length != 3) {
      two = '0' + two;
    }
    one = '000';
  } else {
    three = value.toString().substring(value.toString().length-4, value.toString().length);
    two = value.toString().substring(value.toString().length-7, value.toString().length-4);
    one = value.toString().substring(0, value.toString().length-7);
    while (one.length != 3) {
      one = '0' + one;
    }
    while (two.length != 3) {
      two = '0' + two;
    }
    while (three.length != 4) {
      three = '0' + three;
    }
  }
  label.innerHTML = one + ' ' + two + ' ' + three;
});

range1.addEventListener('input', (e) => {
  const label = e.target.nextElementSibling;
  const value = +e.target.value;
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  const max = +e.target.max;
  const min = +e.target.min;
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = '+' + value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}