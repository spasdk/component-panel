/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('spa-component');


/**
 * Base panel implementation.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object} [config={}] init parameters (all inherited from the parent)
 *
 * @example
 * var Panel = require('stb/ui/panel'),
 *     panel = new Panel({
 *         $node: document.getElementById('someId'),
 *         children: [
 *             new Panel({
 *                 $node: document.getElementById('anotherId')
 *             })
 *         ]
 *     });
 *
 * panel.add(
 *     new Button(),
 *     new Button(),
 *     new Button()
 * );
 *
 * page.add(panel);
 */
function Panel ( config ) {
    // sanitize
    config = config || {};

    console.assert(typeof this === 'object', 'must be constructed via new');

    if ( DEVELOP ) {
        if ( typeof config !== 'object' ) {
            throw new Error(__filename + ': wrong config type');
        }
        // init parameters checks
        if ( 'className' in config && (!config.className || typeof config.className !== 'string') ) {
            throw new Error(__filename + ': wrong or empty config.className');
        }
    }

    // can't accept focus
    config.focusable = config.focusable || false;

    // set default className if classList property empty or undefined
    //config.className = 'panel ' + (config.className || '');

    // parent constructor call
    Component.call(this, config);
}


// inheritance
Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

// set component name
Panel.prototype.name = 'spa-component-panel';


// public
module.exports = Panel;
