/**
 * Open centered pop-up window
 *
 * @since       1.0
 * @author      Arthur "Berserkr" Gareginyan <http://www.arthurgareginyan.com>
 * @copyright 	Copyright (c) 2016, Arthur Gareginyan
 * @link      	https://github.com/ArthurGareginyan/disable-right-click
 * @license   	http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @param URL - specifies the URL of the page to open. If no URL is specified, a new window with about:blank will be opened
 * @param windowName - specifies the target attribute or the name of the window (_blank, _parent, _self, _top, name)
 * @param windowWidth - the window width in pixels (integer)
 * @param windowHeight - the window height in pixels (integer)
 */
function popUpWindow(URL, windowName, windowWidth, windowHeight) {
    var centerLeft = (screen.width/2)-(windowWidth/2);
    var centerTop = (screen.height/2)-(windowHeight/2);
    var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no, ';
    return window.open(URL, windowName, windowFeatures +' width='+ windowWidth +', height='+ windowHeight +', top='+ centerTop +', left='+ centerLeft);
}