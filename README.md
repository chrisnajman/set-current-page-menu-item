# Set Current Page Menu Item

## Description

Go to any page and the primary menu link for that page will be highlighted. You can add as many links as required. There is nothing hardcoded on the link itself.

### How it works

#### JavaScript

The JavaScript function checks to see if the `link.href` matches the `location.href`. If it does, the attribute `aria-current="page"` is set on the link. To cover the situation when the `location.href` is only `/` a further check is made:

```JavaScript
if (
      link.pathname.split("/").pop() === "index.html" &&
      location.pathname.split("/").pop() === ""
    )
```

If this is true, the attribute is set on the 'Home' link.

##### Notes

- The 'Home' page file name is `index.html`. If you decide to change it (e.g. `home.html`) you will have to update the reference to it in the JavaScript.
- The function is placed in a module and imported and called (`document.body.onload = setCurrentPageMenuItem()`) in `index.js`.
- **Important**: the function only works on a flat, top-level menu. It doesn't work if there are sub-folders containing an `index.html` page.

#### CSS

The `aria-current="page"` attribute is referenced in `primary-navigation.css`:

```CSS
&[aria-current="page"],
&[aria-current="page"]:hover {
    text-decoration: none;
    cursor: default;
    border-bottom-color: var(--link);
    font-weight: 600;
}
```

##### Note

- CSS Nesting is used in this project.

## Accessibility

Dynamically adding the `aria-current="page"` attribute to the link kills two birds with one stone:

- accessibility is enhanced and
- the attribute is used as a styling hook.

## Testing

- Windows 10
  - Chrome
  - Firefox
  - Microsoft Edge

The page has been tested in both browser and device views.
