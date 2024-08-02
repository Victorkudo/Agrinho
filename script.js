document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
        
        document.querySelectorAll('.tabcontent').forEach(tab => {
            tab.style.display = 'none';
        });

        
        document.getElementById(targetId).style.display = 'block';
    });
});


document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
       
        button.classList.toggle('active');

        const content = button.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
