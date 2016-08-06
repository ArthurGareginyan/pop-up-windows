# Pop-up windows

Creating a small pop-up windows, and put it on the center of screen variable to the currently selected screen resolution, by using only the JavaScript.

Pop-ups windows are some of the most common UI elements that we can find in websites. Sometimes it’s useful to add a pop-up to your pages. You can use it, for example, to create a contact forms (sign-up boxes), photo galleries, or for areas of your website that you might need a link containing “more information”.

You can use a TARGET=”_blank” in the <\A> tag, but this simply opens a new browser window that completely obscures the old one. This may be what you want, but at other times a small window on center of the large browser window is much better. This small window is popularly known as a pop-up. Using the JavaScript, you can create a pop-up window that appears when a user clicks a specific word, phrase, or graphic in a topic. This example is based on the JavaScript window `open()` method. By simply embedding a small snippet of code in your website and creating a unique link, you have complete control over the exact pixel dimensions of a link that opens in a new window.


## Usage

**Step 1.**

Hook up this JavaScript file on a web page of your website where you want to creat a pop-up windows.

To add this JavaScript into the body (to the head or footer) of HTML document you just need to wrap this code in HTML tag `<script language="JavaScript"></script>`.


**Step 2.**

Add the link to any objects that you want to act as a pop-up window.

In Adobe Muse you can use hyperlink code for objects:
```
javascript:popUpWindow('http://www.your-site.com','Example','700','600')
```

For else cases you can use one of the following hyperlinks (both are the same):
```
<a onclick="popUpWindow('http://www.your-site.com','Example','700','600');" href="javascript:void(0);">CLICK TO OPEN POP-UP</a>
```
```
<a href="javascript:popUpWindow('http://www.your-site.com','Example','700','600')">CLICK TO OPEN POP-UP</a>
```

**Note:** Replace the `http://www.your-site.com` with your link to page. Replace the `Example` with name of the window (_blank, _parent, _self, _top, name). Replace the `700` and `600` with needed size of the pop-up window.

**Note:** This function doesn’t work on a dual monitor setup.

### Parameter values

| Feature                |                                                           Description                                                          |
|------------------------|:------------------------------------------------------------------------------------------------------------------------------:|
| directories=yes/no/1/0 |                           Obsolete. Whether or not to add directory buttons. Default is yes. IE only                           |
| height=pixels          |                                           The height of the window. Min. value is 100                                          |
| left=pixels            |                                  The left position of the window. Negative values not allowed                                  |
| location=yes/no/1/0    | Whether or not to display the address field. Opera only                                                                        |
| menubar=yes/no/1/0     | Whether or not to display the menu bar                                                                                         |
| resizable=yes/no/1/0   | Whether or not the window is resizable. IE only                                                                                |
| scrollbars=yes/no/1/0  | Whether or not to display scroll bars. IE, Firefox & Opera only                                                                |
| status=yes/no/1/0      | Whether or not to add a status bar                                                                                             |
| titlebar=yes/no/1/0    | Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box |
| toolbar=yes/no/1/0     | Whether or not to display the browser toolbar. IE and Firefox only                                                             |                                                           


## Contributing

Thank you for considering contributing to the script "Pop-up windows"! The contribution guide can be found in the [CONTRIBUTING.md](https://github.com/ArthurGareginyan/pop-up-windows/blob/master/CONTRIBUTING.md).


## Security Vulnerabilities

If you discover a security vulnerability within this script, please send an e-mail to Arthur Gareginyan at arthurgareginyan@gmail.com. All security vulnerabilities will be promptly addressed.


## License

This script is licensed under the [GNU General Public License, version 3 (GPLv3)](http://www.gnu.org/licenses/gpl-3.0.html) and is distributed free of charge.

Commercial licensing (e.g. for projects that can’t use an open-source license) is available upon request.


## Author

Arthur Garegnyan

* Email: arthurgareginyan@gmail.com

* GitHub: [https://github.com/ArthurGareginyan/](https://github.com/ArthurGareginyan/)

* Website: [http://www.arthurgareginyan.com](http://www.arthurgareginyan.com)

* Donation: [http://www.arthurgareginyan.com/donate.html](http://www.arthurgareginyan.com/donate.html)

---
Logos:

[![JS](https://dl.dropboxusercontent.com/s/zumy31fjzyj4p6z/JavaScript.png)]()
[![License](http://www.gnu.org/graphics/gplv3-127x51.png)](http://www.gnu.org/licenses/gpl-3.0.html)
