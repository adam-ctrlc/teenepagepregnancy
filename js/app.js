const reachOutContacts = document.querySelectorAll('.reach-out-contacts');

reachOutContacts.forEach((contact) => {
  const listItems = contact.querySelectorAll('li');
  const paragraphs = contact.querySelectorAll('p');
  listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      paragraphs[index].classList.toggle('reach-out-contacts-p');
    });
  });
});

function setupScrollReveal() {
  try {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });
  } catch (error) {
    console.error('Error setting up scroll reveal:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupScrollReveal();
});
