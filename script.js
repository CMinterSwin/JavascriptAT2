let timeoutids = [];
document.getElementById('roll').onclick = () => {
  timeoutids.forEach((id) => clearTimeout(id));
  timeoutids = [];
  if (document.getElementById('times').value > 20) {
    document.getElementById('list').innerText = "can't go above 20!";
    return;
  }
  for (let i = 0; i < document.getElementById('times').value; ) {
    timeoutids.push(
      setTimeout(() => {
        document.getElementById('list').innerText += ` ${Math.floor(
          Math.random() * 6 + 1
        )}`;
        average();
        total();
      }, i++ * 1000)
    );
  }
};

document.getElementById('average').onclick = average;

document.getElementById('total').onclick = total;

document.getElementById('clear').onclick = () => {
  timeoutids.forEach((id) => clearTimeout(id));
  timeoutids = [];
  document.getElementById('to').innerText = 0;
  document.getElementById('av').innerText = 0;
  document.getElementById('list').innerText = '';
};

function average() {
  document.getElementById('av').innerText =
    document
      .getElementById('list')
      .innerText.split(' ')
      .reduce((a, b) => Number(a) + Number(b)) /
    document.getElementById('list').innerText.split(' ').length;
}
total = () => {
  document.getElementById('to').innerText = document
    .getElementById('list')
    .innerText.split(' ')
    .reduce((a, b) => Number(a) + Number(b));
};
