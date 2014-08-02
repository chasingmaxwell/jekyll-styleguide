(function ($, Drupal, window, document, undefined) {

  var guide_icon_tooltip = function () {
    // We use .attr() instead of .data() because we need an actual DOM change.
    if ($(this).text().length) {
      $(this).attr('data-desc', $(this).text()).addClass('show-tooltip');
    }
  };

  Drupal.behaviors.guide_icon_tooltip = {
    attach: function () {
      $('[class*="icon-"]').each(guide_icon_tooltip);
      $('.flag').each(guide_icon_tooltip);
    }
  };

})(jQuery, Drupal, this, this.document);
