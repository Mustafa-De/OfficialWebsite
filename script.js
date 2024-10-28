document.addEventListener('DOMContentLoaded', () => {
    // 添加打字机效果
    const typingEffect = (element, text, speed = 100) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

    // 添加滚动动画
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('animate-fade-in');
        observer.observe(section);
    });

    // 为导航链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加打字机效果到英雄区域的标题
    const heroTitle = document.querySelector('#hero h2');
    if (heroTitle) {
        heroTitle.textContent = '';
        typingEffect(heroTitle, '致无尽、致创艺', 100);
    }

    // 添加浮动动画到英雄区域
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.add('animate-float');
    }

    // 添加脉冲动画到"了解更多"按钮
    const learnMoreBtn = heroSection ? heroSection.querySelector('a.bg-blue-500') : null;
    if (learnMoreBtn) {
        learnMoreBtn.classList.add('animate-pulse');
    }

    // 添加产品卡片悬停效果
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest('.tech-border')) {
            e.target.closest('.tech-border').classList.add('animate-pulse');
        }
    });
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest('.tech-border')) {
            e.target.closest('.tech-border').classList.remove('animate-pulse');
        }
    });

    // 为产品页面的APP名称添加打字机效果
    const appIntroSection = document.getElementById('products');
    if (appIntroSection) {
        const appTitle = appIntroSection.querySelector('h2');
        if (appTitle) {
            appTitle.textContent = '';
            typingEffect(appTitle, '我们的创新APP', 100);
        }
    }

    // 移动端菜单控制
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 点击菜单项后关闭菜单
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
