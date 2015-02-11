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
      width: parseFloat(nodeClientRect.width),
      height: parseFloat(nodeClientRect.height),
      top: parseFloat(nodeClientRect.top),
      right: parseFloat(nodeClientRect.right),
      bottom: parseFloat(nodeClientRect.bottom),
      left: parseFloat(nodeClientRect.left),
      paddings: {
        top: parseFloat(nodeComputedStyles.paddingTop),
        right: parseFloat(nodeComputedStyles.paddingRight),
        bottom: parseFloat(nodeComputedStyles.paddingBottom),
        left: parseFloat(nodeComputedStyles.paddingLeft)
      },
      margins: {
        top: parseFloat(nodeComputedStyles.marginTop),
        right: parseFloat(nodeComputedStyles.marginRight),
        bottom: parseFloat(nodeComputedStyles.marginBottom),
        left: parseFloat(nodeComputedStyles.marginLeft)
      },
      borders: {
        top: parseFloat(nodeComputedStyles.borderTopWidth),
        right: parseFloat(nodeComputedStyles.borderRightWidth),
        bottom: parseFloat(nodeComputedStyles.borderBottomWidth),
        left: parseFloat(nodeComputedStyles.borderLeftWidth)
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
