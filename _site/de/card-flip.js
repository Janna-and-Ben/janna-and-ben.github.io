/**
 * card-flip.js
 *
 * Adds tap/click-to-flip support for .stay-card-wrapper elements.
 * Drop this script into your project and load it before </body>:
 *   <script src="card-flip.js"></script>
 *
 * Works alongside the SCSS hover rule — on real pointer devices the
 * hover still fires; on touch devices this class toggle takes over.
 */

(function () {
  function initCardFlip() {
    var wrappers = document.querySelectorAll('.stay-card-wrapper');

    wrappers.forEach(function (wrapper) {
      wrapper.addEventListener('click', function (e) {
        // Don't flip if the user tapped a link on the back of the card
        if (e.target.closest('a')) return;

        wrapper.classList.toggle('is-flipped');
      });

      // Flip back if focus leaves the card (accessibility)
      wrapper.addEventListener('focusout', function (e) {
        if (!wrapper.contains(e.relatedTarget)) {
          wrapper.classList.remove('is-flipped');
        }
      });
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCardFlip);
  } else {
    initCardFlip();
  }
})();
