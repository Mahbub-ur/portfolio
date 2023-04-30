let progress = document.querySelectorAll('.progress span'),
    spans = document.querySelectorAll('.progress-title span');

progress.forEach((prog) => {
    prog.style.width = prog.dataset.width;
});

spans.forEach((span) => {
    span.style.left = span.dataset.num;
    span.style.opacity = '1';
    span.style.visibility = 'visible';
});