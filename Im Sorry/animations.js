document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
            message.querySelectorAll('p').forEach((p, i) => {
                setTimeout(() => {
                    p.style.opacity = '1';
                }, i * 1000);
            });
        }, index * 2000);
    });
});
