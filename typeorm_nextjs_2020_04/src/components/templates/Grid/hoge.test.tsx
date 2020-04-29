const { baseElement } = render(<MockForm {...props} />)
const domText = prettyDOM(baseElement) // if (DEBUG) console.debug(domText);
expect(domText).toContain('住所')
