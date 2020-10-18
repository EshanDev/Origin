/* Navigation */

let sidebar_btn = document.getElementById('toggleBTN'),
    body = document.getElementById('body'),
    sidebar_content = document.getElementById('Sidebar');


sidebar_btn.addEventListener('click', function(e){
    body.classList.toggle('position-left');
    sidebar_content.classList.toggle('isClose');
    e.target.classList.toggle('change');
    e.stopPropagation();
});


sidebar_content.addEventListener('click', function(e){
    e.stopPropagation();
});

document.addEventListener('click', function(e){
    sidebar_content.classList.add('isClose');
    body.classList.remove('position-left');
});
