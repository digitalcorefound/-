document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('.animate-fade-in');
  section.classList.add('opacity-0');

  setTimeout(() => {
    section.classList.remove('opacity-0');
    section.classList.add('opacity-100', 'transition-opacity', 'duration-1000');
  }, 100);
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounters = () => {
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(update, 15);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  });

  observer.observe(document.querySelector("section"));
});


// إضافة حركة عند التمرير
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.animate-fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const f = this.firstName.value.trim();
  const l = this.lastName.value.trim();
  const email = this.email.value.trim();
  const interest = this.interest.value;
  const msg = this.message.value.trim();

  const text = `تم إرسال رسالة جديدة:
الاسم: ${f} ${l}
الإيميل: ${email}
الاهتمام: ${interest}
الرسالة: ${msg}`;

  const whatsappNumber = "96522054996";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
window.addEventListener("scroll", () => {
  const footer = document.getElementById("pageFooter");
  const trigger = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight - 100;

  if (trigger >= pageHeight) {
    footer.classList.remove("hidden");
    footer.classList.add("opacity-100");
  }
});
