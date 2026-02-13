export default function decorate(block) {
  block.classList.add('cards-wrapper');

  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('card');
  });
}
