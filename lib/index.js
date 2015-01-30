/**
 * Provide some useful abstactions for dealing with DOM nodes.
 */
module.exports = {
  /**
   * This provide dimension information about a node including data from the bounding client rect and computed styles (padding, margin, etc...)
   */
  getDimensions: function(node) {
    var nodeClientRect = node.getBoundingClientRect();
    var nodeComputedStyles = window.getComputedStyle(node);

    var dimensions = {
      width: parseInt(nodeClientRect.width),
      height: parseInt(nodeClientRect.height),
      top: parseInt(nodeClientRect.top),
      right: parseInt(nodeClientRect.right),
      bottom: parseInt(nodeClientRect.bottom),
      left: parseInt(nodeClientRect.left),
      paddings: {
        top: parseInt(nodeComputedStyles.paddingTop),
        right: parseInt(nodeComputedStyles.paddingRight),
        bottom: parseInt(nodeComputedStyles.paddingBottom),
        left: parseInt(nodeComputedStyles.paddingLeft)
      },
      margins: {
        top: parseInt(nodeComputedStyles.marginTop),
        right: parseInt(nodeComputedStyles.marginRight),
        bottom: parseInt(nodeComputedStyles.marginBottom),
        left: parseInt(nodeComputedStyles.marginLeft)
      },
      borders: {
        top: parseInt(nodeComputedStyles.borderTopWidth),
        right: parseInt(nodeComputedStyles.borderRightWidth),
        bottom: parseInt(nodeComputedStyles.borderBottomWidth),
        left: parseInt(nodeComputedStyles.borderLeftWidth)
      }
    };

    return dimensions;
  },

  /**
   * Set the height of the node to match the content of the node
   */
  autoSetHeight: function(node) {
    var dimensions = this.getDimensions(node);

    node.style.height = node.scrollHeight + dimensions.borders.top + dimensions.borders.bottom + 'px';
  }
};
