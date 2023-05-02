

function firstTest() {
    confetti({
        particleCount: 1000,
        spread: 70,
        origin: { y: 0.5 }
    });
}

function secondTest() {
    var duration = 15 * 100;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#ffffff'],
            shapes: ['circle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());
}

function thirdTest() {
    var end = Date.now() + (15 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}


const pippo = document.getElementById('pippo');
const p = document.createElement('p');
const pText = document.createTextNode('ciao');

p.appendChild(pText);
pippo.appendChild(p);

const pippetto = $('#pippo').append('<h1>').text('ciaone jquery')