const code = {
    // Dimensions
    height: {
        Property: 'Height',
        'Basic Definition:': 'Controls the height of an element.',
        'Related Notes:': ["When the unit used for height is %, it is relative to the containing element's height"],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/height',
    },
    width: {
        Property: 'Width',
        'Basic Definition:': 'Controls the width of an element.',
        'Related Notes:': ["When the unit used for width is %, it is relative to the containing element's width"],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/width',
    },
    margin: {
        Property: 'Margin',
        'Basic Definition:': "Margin applies distance between the element's content and the elements around it.",
        'Related Notes:': [
            'Margin-Top and Margin-Bottom do not apply to inline display elements',
            'All margins, when defined as a percentage, are relative to the width of the parent (to include margin-top and margin-bottom)',
            'Margin can accept 1 (applies to all sides), 2 (first applies vertically, second applies horizontally), or 4 (top, right, bottom, left) arguments.',
        ],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw', 'ch'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin',
    },
    'margin-top': {
        Property: 'Margin-Top',
        'Basic Definition:': "Margin applies distance between the element's content and the elements around it.",
        'Related Notes:': [
            'Margin-Top and Margin-Bottom do not apply to inline display elements',
            'All margins, when defined as a percentage, are relative to the width of the parent (to include margin-top and margin-bottom)',
        ],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw', 'ch'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin',
    },
    // Display
    block: {
        Property: 'Block',
        'Basic Definition:':
            'Provided the element is in the normal flow, block display means the element will start a new line and take up the entire width of the parent by default.',
        'Related Notes:': [
            'Most elements with a default display of block also have some margin applied to them (particularly top and bottom)',
            'An item with display of flex acts like a display of block with respect to itself and elements outside of it',
            'Block display elements can have height, width, margin, and padding applied to them (as opposed to inline display elements)',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    inline: {
        Property: 'Inline',
        'Basic Definition:':
            'Provided the element is in the normal flow, inline-block display means the element will be at the same line as the element before it if there is space like an inline element, but can have height, width, padding, and margin applied to it like a block display element.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    'inline-block': {
        Property: 'Inline-Block',
        'Basic Definition:':
            'Provided the element is in the normal flow, inline display means the element will be at the same line as the element before it if there is space.',
        'Related Notes:': [
            'Padding and margin can be applied to inline elements, but it will only have an effect in the x direction.',
            'Inline display elements cannot have height or width applied to them (as opposed to block, inline-block, and flex display elements)',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    none: {
        Property: 'None',
        'Basic Definition:':
            "Display of none removes the element from the document's flow. Other elements will render as though it did not exist.",
        'Related Notes:': [
            'Use either opacity: 0 or visibility: hidden if you want the element to remain where it is (and thus effect layout) but be invisible.',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    table: {
        Property: 'Table',
        'Basic Definition:':
            'Table display causes an element to treat its children as though they were table elements.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
    },
    // Absolute Positioning
    top: {
        Property: 'Top',
        'Basic Definition:': 'The top property defines how far the element is from the top of its parent.',
        'Related Notes:': [
            'Top only applies to elements with absolute or fixed positioning.',
            'Top relates to the closest parent/ancestor with an explicit position. I.e., if the closest parent has an undefined position (not explicitly in the css code), it will look at the next ancestor or the body tag if there are no other ancestors.',
        ],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/top',
    },
    left: {
        Property: 'Left',
        'Basic Definition:': 'The left property defines how far the element is from the left side of its parent.',
        'Related Notes:': [
            'Left only applies to elements with absolute or fixed positioning.',
            'Left relates to the closest parent/ancestor with an explicit position. I.e., if the closest parent has an undefined position (not explicitly in the css code), it will look at the next ancestor or the body tag if there are no other ancestors.',
        ],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/left',
    },
    // Visibility
    opacity: {
        Property: 'Opacity',
        'Basic Definition:': 'Defines how transparent or opaque the element is.',
        'Related Notes:': [
            'An opacity of 0 makes the element invisible',
            'Opacity effects text highlighting',
            'Opacity is not inherited, but does effect the appearance of children',
            'Opacity has no effect on layout.',
            'It is recommended to use an integer or float for opacity as percentage can cause bugs.',
            'If a float is used, it must be between 0 and 1.',
            'Opacity is the fourth value in an rgba() context',
        ],
        'Units Available:': ['integer', 'float', '%'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/opacity',
    },
    visible: {
        Property: 'Visible',
        'Basic Definition:': 'Sets visibility to visible or opaque.',
        'Related Notes:': [
            'Children of a hidden element will still be visible if explicitly stated for the given element(s). This is contrasted with opacity.',
            'Elements with visibility set to hidden cannot be focused on',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/visibility',
    },
    hidden: {
        Property: 'Hidden',
        'Basic Definition:': 'Hides an element and its children.',
        'Related Notes:': [
            'Children of a hidden element will still be visible if explicitly stated for the given element(s). This is contrasted with opacity.',
            'Elements with visibility set to hidden cannot be focused on',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/visibility',
    },
    collapse: {
        Property: 'Collapse',
        'Basic Definition:':
            "Will hide and effectively remove an element from a table, but the other elements (rows, columns, or groups) will still have a size that's calculated as though the collapsed element were still there.",
        'Related Notes:': [
            'Visibility of collapse will act the same as hidden for elements that are not table-related.',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/visibility',
    },
    // Transformations
    transform: {
        Property: 'Transform',
        'Basic Definition:': 'Allows for simple 2D or 3D transformations to be applied to an element.',
        'Related Notes:': [
            'Not all elements are transformable. See MDN documentation for more details',
            'Transform can accept multiple values (E.g. transform: translateX(20%) rotate(45deg)',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
    },
    rotate: {
        Property: 'Rotate',
        'Basic Definition:': 'Allows for 2D or 3D rotation of an element.',
        'Related Notes:': [
            'The element will be rotated on a 2D basis by default',
            'Related properties: rotateX, rotateY, rotateZ, rotate3D',
            'The order your transform functions are in matters particularly much for rotate. See MDN documentation for more details.',
            'Rotate does not deform an element (unlike skew and scale)',
        ],
        'Units Available:': 'deg',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate()',
    },
    skew: {
        Property: 'Skew',
        'Basic Definition:':
            'Skews an element in the X direction or both directions if a second argument is provided. skewX only skews in the X direction. skewY only skews in the Y direction.',
        'Related Notes:': ['Skew deforms an element'],
        'Units Available:': 'deg',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew()',
    },
    scale: {
        Property: 'Scale',
        'Basic Definition:':
            'Resizes an element and its children on the x and y axis (or optionally either one with scaleX and scaleY). scale3d will resize an element on all three axes.',
        'Related Notes:': [
            'Scaling does not change the position of an element or the elements around it',
            'A value of 1 has no effect',
            'Scale deforms the element it acts on',
        ],
        'Units Available:': ['integer', 'float'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale()',
    },
    translate: {
        Property: 'Translate',
        'Basic Definition:':
            'Repositions an element in the x direction, y direction, or both if two arguments are provided (e.g. translate(-50%, -50%)).',
        'Related Notes:': ["When a percentage is used, it is relative to the element's own dimensions"],
        'Units Available:': ['px', 'em', 'rem', '%', 'vh', 'vw', 'ch'],
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()',
    },
    // Transition Timing Functions
    linear: {
        Property: 'Linear',
        'Basic Definition:':
            'Transition timing function of linear causes the element to change/move at a consistent rate.',
        'Related Notes:': ['Linear is rarely used as it provides a rather boring experience for the user'],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function',
    },
    'ease-in': {
        Property: 'Ease-In',
        'Basic Definition:':
            'Transition timing function of ease-in causes an element to change/move slowly at the beginning and speed up as it approaches the final state.',
        'Related Notes:': [
            'Chrome developer tools has a useful feature for trying out your own transition-timing functions. Go here to see how: https://brettdewoody.com/using-chromes-cubic-bezier-editor/',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function',
    },
    'ease-out': {
        Property: 'Ease-Out',
        'Basic Definition:':
            'Transition timing function of ease-out causes an element to change/move quickly at the beginning and slow down as it approaches the final state.',
        'Related Notes:': [
            'Chrome developer tools has a useful feature for trying out your own transition-timing functions. Go here to see how: https://brettdewoody.com/using-chromes-cubic-bezier-editor/',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function',
    },
    ease: {
        Property: 'Ease-Out',
        'Basic Definition:':
            'Transition timing function of ease causes an element to change/move slowly at the beginning and the end, but faster in the middle.',
        'Related Notes:': [
            'Chrome developer tools has a useful feature for trying out your own transition-timing functions. Go here to see how: https://brettdewoody.com/using-chromes-cubic-bezier-editor/',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function',
    },
    // Flexbox
    'flex-start': {
        Property: 'Flex-Start',
        'Basic Definition:':
            'Pushes all children of a flex container to the beginning of whichever axis the value belongs to (main axis or cross axis). The beginning will be reversed if the property flex-start is assigned to is a reverse.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    center: {
        Property: 'Center',
        'Basic Definition:':
            'Pushes all children of a flex container to the center/middle of whichever axis the value belongs to (main axis or cross axis).',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'flex-end': {
        Property: 'Flex-End',
        'Basic Definition:':
            'Pushes all children of a flex container to the end of whichever axis the value belongs to (main axis or cross axis). The end will be reversed if the property flex-end is assigned to is a reverse.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'space-around': {
        Property: 'Space-Around',
        'Basic Definition:':
            'Equal parts of the available space around the child elements is put beside (or above and below) each element.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'space-between': {
        Property: 'Space-Between',
        'Basic Definition:':
            'The first and last element are put at the end and the beginning of the selected axis, then all available space is put between the remaining children.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'space-evenly': {
        Property: 'Space-Evenly',
        'Basic Definition:':
            'The available space is divided into the amount of children + 1. One portion is put at the end of the selected axis and another at the beginning, then the remaining portions fill the gaps between the children, if there are any.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    row: {
        Property: 'Row',
        'Basic Definition:':
            'Sets all children of the flex container to be on a horizontal axis in the order they appear in the code.',
        'Related Notes:': [
            'By default, children of a flexbox do not wrap',
            'By default, children of a flexbox container each try to take up an equal amount of the available space',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'row-reverse': {
        Property: 'Row-Reverse',
        'Basic Definition:':
            'Sets all children of a flex container to be on a horizontal axis, but in the reverse order of how they appear in the code.',
        'Related Notes:': [
            'By default, children of a flexbox do not wrap',
            'Children of a flexbox can have their order changed manually by assigning an order property to them',
        ],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    column: {
        Property: 'Column',
        'Basic Definition:':
            'Sets all children of the flex container to be on a vertical axis in the order they appear in the code.',
        'Related Notes:': ['By default, children of a flexbox do not wrap'],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'column-reverse': {
        Property: 'Column-Reverse',
        'Basic Definition:':
            'Sets all children of the flex container to be on a vertical axis in the opposite order of how they appear in the code.',
        'Related Notes:': ['By default, children of a flexbox do not wrap'],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    stretch: {
        Property: 'Stretch',
        'Basic Definition:':
            'Causes all children of a flexbox to take up as much space in the cross axis as possible. Only applies with the align properties.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    nowrap: {
        Property: 'No-Wrap',
        'Basic Definition:':
            'Children will not wrap on the main axis, but instead try to fit into the flexbox container or overflow if custom widths/heights have been set on the children.',
        'Related Notes:': ['This is the default setting for a flexbox container'],
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    wrap: {
        Property: 'Wrap',
        'Basic Definition:':
            'Children will wrap on the main axis if their combined width is too large for the flexbox container. Padding and margin are included in the width used for the calculation.',
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    'wrap-reverse': {
        Property: 'Wrap-Reverse',
        'Basic Definition:': "Weird. Don't use.",
        'Related Notes:': '',
        'Units Available:': 'N/A',
        'MDN Link:': 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
};

const initialState = {
    Property: '',
    'Basic Definition:': '',
    'Related Notes:': '',
    'Units Available:': '',
    'MDN Link:': '',
};

const activeSelectionReducer = (state = initialState, action) => {
    if (code[action.type]) {
        return {
            ...state,
            ...code[action.type],
        };
    }
    return { ...state };
};

export default activeSelectionReducer;
