// التنقل المتنقل (Mobile Navigation)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// تغيير لون الشريط عند التمرير
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// شريط تمرير آراء القراء
const testimonialsSlider = document.querySelector('.testimonials-slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

nextBtn.addEventListener('click', () => {
    testimonialsSlider.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    testimonialsSlider.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});

// التحقق من صحة نموذج الاتصال
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('الرجاء ملء جميع الحقول المطلوبة');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return;
    }
    
    // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// تأثير التمرير للعناصر
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('animated');
};

const hideScrollElement = (element) => {
    element.classList.remove('animated');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// تهيئة العناصر المتحركة
window.addEventListener('DOMContentLoaded', () => {
    scrollElements.forEach((el) => {
        el.classList.add('scroll-animate');
        hideScrollElement(el);
    });
    
    // تحميل أولي للعناصر المرئية
    handleScrollAnimation();
});

// إضافة مستمع لحدث التمرير
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// العد التنازلي للعرض الخاص (اختياري)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3); // 3 أيام من الآن

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">أيام</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">ساعات</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">دقائق</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">ثواني</span>
        </div>
    `;
    
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "انتهى العرض!";
    }
}, 1000);

// تنعيم التمرير لروابط التنقل
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});