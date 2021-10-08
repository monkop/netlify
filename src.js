
var i = 0;
      var txt = ' Wait for a min link will be genrated ';
      var speed = 50;

      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      /* Search Bar  Start*/

      const searchFocus = document.getElementById('search-focus');
      const keys = [
        { keyCode: 'AltLeft', isTriggered: false },
        { keyCode: 'ControlLeft', isTriggered: false },
      ];

      window.addEventListener('keydown', (e) => {
        keys.forEach((obj) => {
          if (obj.keyCode === e.code) {
            obj.isTriggered = true;
          }
        });

        const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

        if (shortcutTriggered) {
          searchFocus.focus();
        }
      });

      window.addEventListener('keyup', (e) => {
        keys.forEach((obj) => {
          if (obj.keyCode === e.code) {
            obj.isTriggered = false;
          }
        });
      });
/* Search Bar  ENd*/